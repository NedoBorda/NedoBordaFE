import { DeletedTask } from "./DeletedTask.model";
import { Task } from "./Task.model";
import { User } from "./User.model";

export type Project = {
  id: string;
  title: string;
  creator: User;
  tasks: Task[];
  members: User[];
  creationDate: number;
  deletedTask: DeletedTask[];
  status: ProjectField[],
  priority : ProjectField[]
  additionalFields: ProjectField[],
};

type ProjectField = {
  name: string;
  variants: { name: string; color: string }[];
};
