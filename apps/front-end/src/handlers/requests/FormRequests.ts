import axios from "axios";
import apiUrl from "../constants/api";

export const FormRequests = {
  sendForm: async (teamData: unknown) => {
    return await axios.post(
      `${apiUrl}/api/team/create`,
      { team: teamData}
    );
  }
}
