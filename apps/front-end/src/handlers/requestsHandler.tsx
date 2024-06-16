import { FormRequests } from "./requests/FormRequests";

const sendFormData = async (name: string, team: any) => {
  console.log(team);
  const parsedTeamData = {
    name,
    people: team.map((person: any) => ({
      ...person,
      firstname: person.firstName,
      lastname: person.lastName,
      age: person.age,
      gender: person.gender,
      experience: person.experience,
      weight: person.weight,
      height: person.height,
      sleepTime: person.sleepTime,
      role: person.role,
      activityLevel: { level: person.activityLevel },
      diet: person.diet,
    })),
  };

  try {
    const sendFormResponse = await FormRequests.sendForm(parsedTeamData);
    console.log("Server Response:", sendFormResponse.data);
    return sendFormResponse.data;
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};

const analyzeData = async (teamId: number) => {
  try {
    const analyzeData = await FormRequests.analizeData(teamId);
    console.log("Server Response:", analyzeData.data);
    return analyzeData.data;
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};

export  { sendFormData, analyzeData };
