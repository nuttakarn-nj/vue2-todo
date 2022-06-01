export { ILoginResponse, login } from "./login";
export { IFindAllTasksResponse, findAllTasks } from "./findAllTasks";
export {
  IRemoveTaskByIDPayloads,
  IRemoveTaskByIDResponse,
  removeTaskByID,
} from "./removeTaskByID";
export {
  ICreateTaskPayloads,
  ICreateTaskResponse,
  createTask,
} from "./createTask";

export interface ITask {
  text: string;
  ID: number;
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt: null | Date;
}
