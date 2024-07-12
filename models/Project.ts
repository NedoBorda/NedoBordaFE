import { DeletedTask } from "./DeletedTask";
import { Task } from "./Task";

export interface Project {
  id: string,
  title: string,
  creator: User,
  tasks: Task[],
  members: User[],
  creationDate: number,
  deletedTask: DeletedTask[],
}