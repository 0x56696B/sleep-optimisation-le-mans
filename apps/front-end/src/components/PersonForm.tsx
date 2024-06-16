import { useEffect, useState } from "react";
import Person from "../models/Person";
//style import
import "./styles/PersonFormStyle.css";
import sendFormData from "../handlers/requestsHandler";

const minimum_team_members = 1;

const PersonForm = () => {
  const [teamName, setTeamName] = useState("");
  const [isInvalidPersonCount, setIsInvalidPersonCount] = useState(false);
  const [membersCount, setMembersCount] = useState(minimum_team_members);
  //collection for team
  //TODO: fetch teams from the db if needed
  const [team, setTeam] = useState<Person[]>([]);

  useEffect(() => {
    // Initializing team with one member on component mount
    const initialTeam = Array.from(
      { length: minimum_team_members },
      (_, i) => ({
        id: i + 1,
        name: "",
        role: "driver",
        age: "",
        gender: "male",
        experience: "",
        activityLevel: "",
        weight: "",
        height: "",
        diet: "",
        sleepTime: "",
      })
    );
    setTeam(initialTeam);
  }, []);

  const handleMembersCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = parseInt(e.target.value, 10);
    if (num < 1 || num > 7) {
      setIsInvalidPersonCount(true);
      return;
    }
    setMembersCount(num);
    setIsInvalidPersonCount(false);
    const newMember = [];
    for (let i = 0; i < num; i++) {
      newMember.push({
        id: i + 1,
        name: "",
        role: "",
        age: "",
        gender: "",
        experience: "",
        activityLevel: "",
        weight: "",
        height: "",
        diet: "",
        sleepTime: "",
      });
    }
    setTeam(newMember);
  };

  const parseFieldValue = (field: keyof Person, value: string): any => {
    switch (field) {
      case "name":
        return value;
      case "age":
        return parseInt(value, 10); // Parsing age to a number
      default:
        return value;
    }
  };

  const handlePersonChange = (
    index: number,
    field: keyof Person,
    value: string
  ) => {
    if (team) {
      const updatedTeam = [...team];
      updatedTeam[index] = {
        ...updatedTeam[index],
        [field]: parseFieldValue(field, value), // Use a helper function to parse the value
      };
      setTeam(updatedTeam);
    }
  };

  const execute = (e: React.FormEvent, teamName: string, team: any) => {
    e.preventDefault();
    sendFormData(teamName, team);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="title">Team Information</h2>
        <form onSubmit={(e) => execute(e, teamName, team)}>
          <label className="form-label" htmlFor="team-name">
            Team Name:
          </label>
          <input
            className="form-input-select"
            type="text"
            id="team-name"
            name="team-name"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />

          <label className="form-label" htmlFor="num-people">
            Number of People:
          </label>
          <input
            className="form-input-select"
            type="number"
            id="num-people"
            name="num-people"
            value={membersCount}
            min="1"
            onChange={handleMembersCountChange}
          />
          {isInvalidPersonCount && (
            <p className="error-msg">
              INVALID INPUT NUMBER!!! (must be between 1 and 7)
            </p>
          )}

          <div style={{ display: "flex", marginTop: "20px" }}>
            {team?.map((person, index) => (
              <div key={person.id} className="person-container">
                <h3>Person {person.id}</h3>

                <div className="section">
                  <label className="form-label" htmlFor={`name-${person.id}`}>
                    Name:
                  </label>
                  <input
                    className="form-input-select"
                    type="text"
                    id={`name-${person.id}`}
                    name="name"
                    value={person.name}
                    onChange={(e) =>
                      handlePersonChange(index, "name", e.target.value)
                    }
                  />
                </div>

                <div className="section">
                  <label className="form-label" htmlFor={`Role-${person.id}`}>
                    {" "}
                    Role :
                  </label>
                  <select
                    className="form-input-select"
                    id={`role-${person.id}`}
                    name="role"
                    value={person.role}
                    onChange={(e) =>
                      handlePersonChange(index, "role", e.target.value)
                    }
                  >
                    <option value="driver">Driver</option>
                    <option value="mechanic">Mechanic</option>
                    <option value="strategist">Strategist</option>
                  </select>
                </div>

                <div className="section">
                  <label className="form-label" htmlFor={`age-${person.id}`}>
                    Age:
                  </label>
                  <input
                    className="form-input-select"
                    type="number"
                    id={`age-${person.id}`}
                    name="age"
                    value={person.age}
                    onChange={(e) =>
                      handlePersonChange(index, "age", e.target.value)
                    }
                  />
                </div>

                <div className="section">
                  <label className="form-label" htmlFor={`gender-${person.id}`}>
                    Gender:
                  </label>
                  <select
                    className="form-input-select"
                    id={`gender-${person.id}`}
                    name="gender"
                    value={person.gender}
                    onChange={(e) =>
                      handlePersonChange(index, "gender", e.target.value)
                    }
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <div className="section">
                  <label
                    className="form-label"
                    htmlFor={`experience-${person.id}`}
                  >
                    Experience:
                  </label>
                  <input
                    className="form-input-select"
                    type="text"
                    id={`experience-${person.id}`}
                    name="experience"
                    value={person.experience}
                    onChange={(e) =>
                      handlePersonChange(index, "experience", e.target.value)
                    }
                  />
                </div>

                <div className="section">
                  <label
                    className="form-label"
                    htmlFor={`activity-level-${person.id}`}
                  >
                    Activity Level:
                  </label>
                  <input
                    className="form-input-select"
                    type="text"
                    id={`activity-level-${person.id}`}
                    name="activityLevel"
                    value={person.activityLevel}
                    onChange={(e) =>
                      handlePersonChange(index, "activityLevel", e.target.value)
                    }
                  />
                </div>

                <div className="section">
                  <label className="form-label" htmlFor={`weight-${person.id}`}>
                    Weight (kg):
                  </label>
                  <input
                    className="form-input-select"
                    type="number"
                    id={`weight-${person.id}`}
                    name="weight"
                    value={person.weight}
                    onChange={(e) =>
                      handlePersonChange(index, "weight", e.target.value)
                    }
                  />
                </div>

                <div className="section">
                  <label className="form-label" htmlFor={`height-${person.id}`}>
                    Height (cm):
                  </label>
                  <input
                    className="form-input-select"
                    type="number"
                    id={`height-${person.id}`}
                    name="height"
                    value={person.height}
                    onChange={(e) =>
                      handlePersonChange(index, "height", e.target.value)
                    }
                  />
                </div>

                <div className="section">
                  <label className="form-label" htmlFor={`diet-${person.id}`}>
                    Diet:
                  </label>
                  <input
                    className="form-input-select"
                    type="text"
                    id={`diet-${person.id}`}
                    name="diet"
                    value={person.diet}
                    onChange={(e) =>
                      handlePersonChange(index, "diet", e.target.value)
                    }
                  />
                </div>

                <div className="section">
                  <label
                    className="form-label"
                    htmlFor={`sleep-time-${person.id}`}
                  >
                    Sleep Time in the Last 72 Hours (hours):
                  </label>
                  <input
                    className="form-input-select"
                    type="number"
                    id={`sleep-time-${person.id}`}
                    name="sleepTime"
                    value={person.sleepTime}
                    onChange={(e) =>
                      handlePersonChange(index, "sleepTime", e.target.value)
                    }
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="submit-container">
            <button className="submit-btn" type="submit">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonForm;
