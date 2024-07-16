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
  additionalFields: ProjectAdditionalField[],
};

type ProjectAdditionalField = {
  name: string;
  variants: { name: string; color: string }[];
};
