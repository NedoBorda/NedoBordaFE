import { User } from "./user.model";

export type Comment = {
  id: string;
  taskId: string;
  text: string;
  creator: User;
  creationDate: number;
};