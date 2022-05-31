import axios from "axios";
import { FIND_ALL_TASKS_URL } from "../Setting";

export interface IRemoveTaskByIDPayloads {
  ID: number;
  token: string;
}

export interface IRemoveTaskByIDResponse {
  data?: {
    success: boolean;
  };
  error?: any;
}

export const removeTaskByID = async (payloads: IRemoveTaskByIDPayloads): Promise<IRemoveTaskByIDResponse> => {
  let response;

  try {
    const data = (await axios.delete(`${FIND_ALL_TASKS_URL}/${payloads.ID}`, {
      headers: {
        Authorization: `Bearer ${payloads.token}`,
      },
    })).data;

    response = {
      data: {
        success: data.status === "success" ? true : false,
      },
    };
  } catch (e) {
    response = {
      error: e,
    };
  }

  return response;
};
