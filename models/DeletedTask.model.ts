import { Task } from "./Task.model";

export type DeletedTask = Task & {
  projectId: string;
};
