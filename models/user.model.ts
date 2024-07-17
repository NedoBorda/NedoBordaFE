import { View } from "../enums/view.enum";

export type User = {
  id: string;
  name: string;
  email: string;
  creationDate: number;
  deletedProjectsIds: string[];
  projectsSettings: UserProject[];
};

type UserProject = {
  id: string;
  savedViews: SavedView[];
};

type SavedView = {
  view: View;
  fields: string[];
};
