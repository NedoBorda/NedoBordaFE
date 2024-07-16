import { DeletedTask } from "./DeletedTask.model";
import { Field } from "./Field.model";
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
  status: Field<Project>[];
  priority: Field<Project>[];
  additionalFields: Field<Project>[];
};
