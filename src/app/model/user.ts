export class User {
  id: number
  username: string;
  firstName: string;
  lastName: string;
  role: string;
  companyId: number;
  education: string;
  profession: string;


  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.username = obj && obj.username || null;
    this.firstName = obj && obj.firstName || null;
    this.lastName = obj && obj.lastName || null;
    this.role = obj && obj.role || null;
    this.companyId = obj && obj.companyId || null;
    this.education = obj && obj.education || null;
    this.profession = obj && obj.profession() || null;
  }
}
