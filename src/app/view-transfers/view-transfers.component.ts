import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MultiTransfer } from 'src/Models/Transfer';
import { MultitransfersService } from '../services/multitransfers.service';

@Component({
  selector: 'app-view-transfers',
  templateUrl: './view-transfers.component.html',
  styleUrls: ['./view-transfers.component.css']
})
export class ViewTransfersComponent implements OnInit {


  multitransfers : MultiTransfer[] = [];

  totalRecords ?: any;
  page : number = 1;
  reference ?: string;

  errorReference = "";


  constructor(private route: ActivatedRoute,
    private multitransfersService :MultitransfersService) {
    this.route.queryParams.subscribe(params => {
      if(params['page'] != undefined) this.page = params['page'];
    });
    this.getTransfers(this.page);
  }

  ngOnInit(): void {
    this.multitransfersService.countMultitransfer_byAgent().subscribe((data:any) => {
      this.totalRecords = data;
      }, (error:any) => {
      });
  }

  getTransfers(currentpage:number){
      this.multitransfersService.GetMultitransfer_byAgent(currentpage).subscribe((data2:any) => {
        this.multitransfers = data2;
      }, (error:any) => {
        console.log(error);
      });
  }

  changepage(currentpage:any){
    this.page = currentpage;
    var current_path = location.protocol + '//' + location.host + location.pathname;
    window.location.href = current_path+"?page="+currentpage;
  }
  

  restituer_transfers(multT:any){
    let tmp = this.multitransfers[multT];
    tmp.transfers = tmp.transfers.filter((transf:any) => {
        transf["transfer_status"] = 4
        return transf.transfer_status==4;
      });
    let index = this.multitransfers.indexOf(tmp);
    this.multitransfers[index] = tmp;
  }



  invalidReference(){
    return this.errorReference != "";
  }


  chercher(){
    var chercherBtn : any = document.getElementById("chercher-btn");
    chercherBtn.innerHTML = "<i class='fa fa-circle-o-notch fa-spin fa-fw'></i>";
    chercherBtn.setAttribute('disabled', true);
    this.errorReference="";
    if(!this.reference){
      this.errorReference="Champ vide !";
      chercherBtn.innerHTML = "Chercher";
      chercherBtn.removeAttribute("disabled");
    }
    else{
      this.multitransfersService.GetMultitransfer_byreference(this.reference).subscribe((data:any) => {
          window.location.href="/infos_Transfert/"+this.reference;
      }, (error:any) => {
        this.errorReference = error.error.error;
        chercherBtn.innerHTML = "Chercher";
        chercherBtn.removeAttribute("disabled");
      });
    }
  }
}
