import { Project } from "./project.model";

type FieldBase = {
  name: string;
};

type FieldWithOptions =  FieldBase & {
  options: FieldOption[];
}

type FieldWithOption =  FieldBase & {
  option: FieldOption;
};

export type Field<T = string> = T extends Project
  ? FieldWithOptions
  : FieldWithOption;

export type FieldOption = {
  name: string;
  color: string;
};
