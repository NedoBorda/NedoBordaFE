import { User } from "./User.model";

export type Update = {
  id: string,
  text: string;
  creator: User,
  creationDate: number,
}