import { Formation } from "../formation/formation";
import { Project } from "../project/project";

export class Information {
  firstName: string;
  lastName: string;
  email: string;
  linkedin: string;
  gitHub: string;
  country: string;
  province: string;
  location: string;
  phoneNumber: string;
  seniority: string;
  profilePicture: string;
  coverImage: string;
  formation: Formation[];
  project: Project[];

  constructor (){

  }

}
