export interface User {
  id: string,
  name: string,
  email: string,
  password: string,
  creationDate: number,
  notifications: {
    text: string,
    link: string
  }[]
  deletedProjects: DeletedProject[]
  projectsSettings: [];
}