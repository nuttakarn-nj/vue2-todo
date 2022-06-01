import axios from "axios";
import { FIND_ALL_TASKS_URL } from "../Setting";

export interface ICreateTaskPayloads {
  taskName: string;
  token: string;
}

export interface ICreateTaskResponse {
  data?: {
    success: boolean;
  };
  error?: any;
}

export const createTask = async (payloads: ICreateTaskPayloads): Promise<ICreateTaskResponse> => {
  let response;
  const body = { text: payloads.taskName };
  const headers = {
    Authorization: `Bearer ${payloads.token}`,
    "Content-Type": "application/json",
    transactionID: "test_transaction_id",
  };

  try {
    const data = (await axios.post(FIND_ALL_TASKS_URL, body, { headers })).data;

    response = {
      data: {
        success: data.ID ? true : false,
      },
    };
  } catch (e) {
    response = {
      error: e,
    };
  }

  return response;
};
