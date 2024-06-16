import axios from "axios";
import apiUrl from "./constants/api";

const sendFormData = async (
  teamName: string,
  team: any
) => {

  const teamData = {
    teamName,
    members: team.map((person: any) => ({
      ...person,
      age: parseInt(person.age, 10),
      weight: parseFloat(person.weight),
      height: parseFloat(person.height),
      sleepTime: parseFloat(person.sleepTime),
    })),
  };
  
  console.log(`${apiUrl}api/person/send-form`);
  try {
    const response = await axios.post(
      `${apiUrl}api/person/send-form`,
      teamData
    );
    console.log("Server Response:", response.data);
    alert("Team data submitted successfully!");
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Failed to submit team data.");
  }
};

export default sendFormData;
