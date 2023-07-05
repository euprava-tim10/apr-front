export class Request_change_status {
  id: number;
  companyStatus: string;
  requestStatus: string;
  companyId: number;
  reason: string;


  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.companyStatus = obj && obj.companyStatus || null;
    this.companyId = obj && obj.companyId || null;
    this.requestStatus = obj && obj.requestStatus || null;
    this.reason = obj && obj.reason || null;
  }
}
