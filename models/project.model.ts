import { Field } from "./field.model";
import { User } from "./user.model";

export type Project = {
  id: string;
  title: string;
  creator: User;
  creationDate: number;
  tasksFields: {
    status: Field<Project>[];
    priority: Field<Project>[];
    additionalFields: Field<Project>[];
  };
};
