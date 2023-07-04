import {User} from "./user";
import {Job_advertisement} from "./job_advertisement";

export class Application {
  status: string;
  user: User;
  jobAlert: Job_advertisement;


  constructor(obj?: any) {
    this.status = obj && obj.status || null;
    this.user = obj && obj.user || null;
    this.jobAlert = obj && obj.jobAlert || null;
  }
}
