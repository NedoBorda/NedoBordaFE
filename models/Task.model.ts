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
  status: TaskField,
  priority: TaskField,
  additionalFields: TaskField[]
}

type TaskField = {
  name: string,
  variant: {
    name: string,
    color: string
  }
}