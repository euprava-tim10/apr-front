import {User} from "./user";

export class Company{
  id: number;
  name: string;
  PIO: string;
  PIB: string;
  registrationNumber: string;
  registrationDate: string;
  status: string;
  employee: User[];



  constructor(obj?: any){
    this.id = obj && obj.id || null;
    this.name = obj && obj.name || null;
    this.PIO = obj && obj.PIO || null;
    this.PIB = obj && obj.PIB || null;
    this.registrationNumber = obj && obj.registrationNumber || null;
    this.registrationDate = obj && obj.registrationDate || null;
    this.status = obj && obj.status || null;
    this.employee = obj && obj.employee || null;

  }
}
