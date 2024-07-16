import { Comment } from "./Comment.model";
import { Field } from "./Field.model";
import { User } from "./User.model";

export type Task = {
  id: string;
  title: string;
  creator: User;
  assignees: User[];
  comments: Comment[];
  dueDate: number;
  creationDate: number;
  status: Field;
  priority: Field;
  additionalFields: Field[];
};
