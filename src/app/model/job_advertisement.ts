export class Job_advertisement {

  id: number;
  startDate: Date;

  endDate: Date;

  neededEducation: string;

  profession: string;


  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.startDate = obj && obj.startDate || null;
    this.endDate = obj && obj.endDate || null;
    this.neededEducation = obj && obj.neededEducation || null;
    this.profession = obj && obj.profession || null;
  }
}
