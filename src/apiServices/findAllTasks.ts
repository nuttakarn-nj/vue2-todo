import axios from "axios";
import { FIND_ALL_TASKS_URL } from "../Setting";
import { ITask } from "./index";

export interface IFindAllTasksResponse {
  data?: {
    tasks: ITask[];
  };
  error?: any;
}

export const findAllTasks = async (token: string): Promise<IFindAllTasksResponse> => {
  let response;

  try {
    const data = (await axios.get(FIND_ALL_TASKS_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })).data;

    response = {
      data: {
        tasks: data,
      },
    };
  } catch (e) {
    response = {
      error: e,
    };
  }

  return response;
};
