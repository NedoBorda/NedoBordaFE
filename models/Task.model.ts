import { Update } from "./Update.model";
import { User } from "./User.model";

export type Task = {
  id: string,
  title: string,
  creator: User,
  assignees: User[],
  updates: Update[],
  dueDate: number,
  creationDate: number,
  additionalFields: TaskAdditionalField[]
}

type TaskAdditionalField = {
  name: string,
  variant: {
    name: string,
    color: string
  }
}