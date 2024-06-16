import { FormRequests } from "./requests/FormRequests";

const sendFormData = async (teamName: string, team: any) => {
  console.log(team);
  const parsedTeamData = {
    teamName,
    people: team.map((person: any) => ({
      ...person,
      name: person.name,
      age: person.age,
      gender: person.gender,
      experience: person.experience,
      activityLevel: person.activityLevel,
      weight: person.weight,
      height: person.height,
      diet: person.diet,
      sleepTime: person.sleepTime,
    })),
  };

  try {
    const sendFormResponse = await FormRequests.sendForm(parsedTeamData);
    console.log("Server Response:", sendFormResponse.data);
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};

export default sendFormData;
