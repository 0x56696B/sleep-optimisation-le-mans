import { FormRequests } from "./requests/FormRequests";

const sendFormData = async (
  teamName: string,
  team: any
) => {

  const parsedTeamData = {
    teamName,
    members: team.map((person: any) => ({
      ...person,
      age: parseInt(person.age, 10),
      weight: parseFloat(person.weight),
      height: parseFloat(person.height),
      sleepTime: parseFloat(person.sleepTime),
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
