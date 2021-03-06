import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/Models/agent';
import { MultitransfersService } from '../services/multitransfers.service';

@Component({
  selector: 'app-serve-transfer-by-wallet',
  templateUrl: './serve-transfer-by-wallet.component.html',
  styleUrls: ['./serve-transfer-by-wallet.component.css']
})
export class ServeTransferByWalletComponent implements OnInit {

  multitransfer ?: any;
  reference ?: string;
  errorReference = "";
  status : number = 0;
  recipient_infos ?: Client;
  phone_number ?: string="";
  valide : boolean = false;

  constructor(private route: ActivatedRoute,
    private multitransfersSrv :MultitransfersService) {
  }

  ngOnInit(): void {
  }

  invalidReference(){
    return this.errorReference != "";
  }


  chercher(){
    var chercherBtn : any = document.getElementById("chercher-ref-wt");
    chercherBtn.innerHTML = "<i class='fa fa-circle-o-notch fa-spin fa-fw'></i>";
    chercherBtn.setAttribute('disabled', true);
    this.errorReference="";
    if(!this.reference){
      this.errorReference="Champ vide !";
      chercherBtn.innerHTML = "Chercher";
      chercherBtn.removeAttribute("disabled");
    }
    else{
      this.multitransfersSrv.GetWalletMultitransfer_byreference(this.reference).subscribe((data:any) => {
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
    this.phone_number = this.recipient_infos?.phoneNumber;
  }
  
  blqstatus(){
    return this.multitransfer?.transfers[0]?.transfer_status==1 || this.multitransfer?.transfers[0]?.transfer_status==6;
  }

}
