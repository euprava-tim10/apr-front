export class User{
  username: string;
  jmbg: string;
  firstName: string;
  lastName: string;
  role: string;



  constructor(obj?: any){
    this.username = obj && obj.username || null;
    this.jmbg = obj && obj.jmbg || null;
    this.firstName = obj && obj.firstName || null;
    this.lastName = obj && obj.lastName || null;
    this.role = obj && obj.role || null;

  }
}
