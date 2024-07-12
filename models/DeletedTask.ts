import { Task } from "./Task";

export interface DeletedTask extends Task {
  projectId: string
}