import { User } from "./User.model";

export type Comment = {
  id: string;
  text: string;
  creator: User;
  creationDate: number;
};
