import { View } from "../enums/View.enum";
import { DeletedProject } from "./DeletedProject.model";

export type User = {
  id: string,
  name: string,
  email: string,
  password: string,
  creationDate: number,
  notifications: Notification[],
  deletedProjects: DeletedProject[],
  projectsSettings: UserProject[],
}


type UserProject = {
  id: string,
  savedViews: SavedView[],
}

type SavedView = {
  view: View,
  fields: string[]
}