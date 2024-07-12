import { Update } from "./Update";

export interface Task {
  id: string,
  title: string,
  creator: User,
  assignees: User[],
  updates: Update[],
  dueDate: number,
  creationDate: number,
  additionalFields: {
    name: string,
    variant: {
      name: string,
      color: string,
    }
  }[]
}