import React, { useState } from "react";
import "./App.css";

type Person = {
  id: number;
  name: string;
  role: string;
  age: string;
  gender: string;
  experience: string;
  activityLevel: string;
  weight: string;
  height: string;
  diet: string;
  sleepTime: string;
};

const App = () => {
  const [teamName, setTeamName] = useState("");
  const [numPeople, setNumPeople] = useState(1);
  const [people, setPeople] = useState<Person[]>([
    {
      id: 1,
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
    },
  ]);

  const handleNumPeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = parseInt(e.target.value, 10);
    setNumPeople(num);

    const newPeople = [];
    for (let i = 0; i < num; i++) {
      newPeople.push({
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
    setPeople(newPeople);
  };

  const handlePersonChange = (
    index: number,
    field: keyof Person,
    value: string
  ) => {
    const updatedPeople = [...people];
    // updatedPeople[index][field] = value;
    setPeople(updatedPeople);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="title">Team Information</h2>
        <form>
          <label htmlFor="team-name">Team Name:</label>
          <input
            type="text"
            id="team-name"
            name="team-name"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />

          <label htmlFor="num-people">Number of People:</label>
          <input
            type="number"
            id="num-people"
            name="num-people"
            value={numPeople}
            min="1"
            onChange={handleNumPeopleChange}
          />

          <div style={{ display: "flex", marginTop: "20px" }}>
            {people.map((person, index) => (
              <div key={person.id} className="person-container">
                <h3>Person {person.id}</h3>

                <div className="section">
                  <label htmlFor={`name-${person.id}`}>Name:</label>
                  <input
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
                 
                    <label htmlFor={`Role-${person.id}`}> Role :</label>
                  <select
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
                  <label htmlFor={`age-${person.id}`}>Age:</label>
                  <input
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
                  <label htmlFor={`gender-${person.id}`}>Gender:</label>
                  <select
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
                  <label htmlFor={`experience-${person.id}`}>Experience:</label>
                  <input
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
                  <label htmlFor={`activity-level-${person.id}`}>
                    Activity Level:
                  </label>
                  <input
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
                  <label htmlFor={`weight-${person.id}`}>Weight (kg):</label>
                  <input
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
                  <label htmlFor={`height-${person.id}`}>Height (cm):</label>
                  <input
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
                  <label htmlFor={`diet-${person.id}`}>Diet:</label>
                  <input
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
                  <label htmlFor={`sleep-time-${person.id}`}>
                    Sleep Time in the Last 72 Hours (hours):
                  </label>
                  <input
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
        </form>
      </div>
        <div className="submit-container">
          <button className="submit-btn" type="submit">
            SUBMIT
          </button>
        </div>
    </div>
  );
};

export default App;
