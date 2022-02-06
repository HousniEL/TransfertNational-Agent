import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/Models/agent';
import { AuthenticationService } from '../services/authentication.service';
import { MultitransfersService } from '../services/multitransfers.service';

@Component({
  selector: 'app-serve-transfer',
  templateUrl: './serve-transfer.component.html',
  styleUrls: ['./serve-transfer.component.css']
})
export class ServeTransferComponent implements OnInit {

  multitransfer ?: any;
  reference ?: string;
  errorReference = "";
  status : number = 0;
  pin_code_ex : boolean = false;
  recipient_infos ?: Client;

  constructor(private route: ActivatedRoute,
    private multitransfersSrv :MultitransfersService) {
  }

  ngOnInit(): void {
  }

  invalidReference(){
    return this.errorReference != "";
  }


  chercher(){
    var chercherBtn : any = document.getElementById("cherche-ref");
    chercherBtn.innerHTML = "<i class='fa fa-circle-o-notch fa-spin fa-fw'></i>";
    chercherBtn.setAttribute('disabled', true);
    this.errorReference="";
    if(!this.reference){
      this.errorReference="Champ vide !";
      chercherBtn.innerHTML = "Chercher";
      chercherBtn.removeAttribute("disabled");
    }
    else{
      this.multitransfersSrv.GetMultitransfer_byreference(this.reference).subscribe((data:any) => {
          this.multitransfer = data;
          this.status = this.multitransfer.transfers[0].transfer_status;
          chercherBtn.innerHTML = "Chercher";
          chercherBtn.removeAttribute("disabled");
      }, (error:any) => {
          this.errorReference=error.error.error;
          chercherBtn.innerHTML = "Chercher";
          chercherBtn.removeAttribute("disabled");
      });
    }
  }

  setBenifice_infos(){

  }

  getBenifice_infos(show_user_infos: any) {
    this.recipient_infos = show_user_infos;
    console.log(this.recipient_infos)
  }
  
  blqstatus(){
    return this.multitransfer?.transfers[0]?.transfer_status==1 || this.multitransfer?.transfers[0]?.transfer_status==6;
  }

  serve_transfer(){
    this.multitransfersSrv.ServeTransfer_byreference(this.reference).subscribe((data:any)=>{
      window.location.href="infos_Transfert/"+this.reference;
    },(error:any)=>{
        
    })
  }

  pin_code_exist(value: any) {
    this.pin_code_ex=value;
  }
  
}
