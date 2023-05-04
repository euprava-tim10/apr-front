export class Company{
  name: string;
  pio: string;
  pib: string;
  registrationNumber: string;
  registrationDate: string;
  status: string



  constructor(obj?: any){
    this.name = obj && obj.name || null;
    this.pio = obj && obj.pio || null;
    this.pib = obj && obj.pib || null;
    this.registrationNumber = obj && obj.registrationNumber || null;
    this.registrationDate = obj && obj.registrationDate || null;
    this.status = obj && obj.status || null;

  }
}
