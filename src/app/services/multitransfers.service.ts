import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultitransfersService {
  

  constructor(private _http:HttpClient) { }

  baseUrl :string= "https://ensa-api-transfer.herokuapp.com/api_agent/";
  
  multitransfer : any = [];

  add(transfer : any) {
      this.multitransfer.push(transfer);
      return true;
  }

  supprimer(transfer : any) {
      this.multitransfer = this.multitransfer.filter((element: any) => { return element != transfer });
  }

  public GetMultitransfer_byAgent(page:any){
    return this._http.get(this.baseUrl+"Multitransfer?page="+page);
  }

  public countMultitransfer_byAgent(){
    return this._http.get(this.baseUrl+"Multitransfer/count");
  }

  public setTransfer_byCash(transfer:any){
    return this._http.post(this.baseUrl+"createTransfer/byCash",transfer);
  }

  public setTransfer(transfer:any){
    return this._http.post(this.baseUrl+"createTransfer",transfer);
  }

  public GetMultitransfer_byreference(reference: any) {
    return this._http.get(this.baseUrl+"UniqueTransfer/"+reference);
  }

  public GetWalletMultitransfer_byreference(reference: any) {
    return this._http.get(this.baseUrl+"UniqueTransfer/wallet/"+reference);
  }


  public ServeTransfer_byreference(reference: any) {
    return this._http.put(this.baseUrl+"UniqueTransfer/serve/"+reference,{});
  }

  public ServeWalletTransfer_byreference(reference: any) {
    return this._http.put(this.baseUrl+"UniqueTransfer/wallet/serve/"+reference,{});
  }

  public checkRecipient_byreference(reference: any,infos :any) {
    return this._http.post(this.baseUrl+"UniqueTransfer/serve/"+reference,infos);
  }

  public checkTransfer_code_pin(reference: any,pin_code :any) {
    return this._http.get(this.baseUrl+"UniqueTransfer/pin_code/"+reference+"?code_pin="+pin_code);
  }

  public ExtortTransfer_byreference(reference: any,motif :string) {
    return this._http.put(this.baseUrl+"UniqueTransfer/extort/"+reference+"?motif="+motif,{});
  }

}
