import { Field } from "./field.model";
import { User } from "./user.model";

export type Task = {
  id: string;
  projectId: string;
  title: string;
  creator: User;
  assignees: User[];
  dueDate: number;
  creationDate: number;
  status: Field;
  priority: Field;
  additionalFields: Field[];
};
