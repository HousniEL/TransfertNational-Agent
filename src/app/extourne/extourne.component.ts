import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MultiTransfer } from 'src/Models/Transfer';
import { MultitransfersService } from '../services/multitransfers.service';

@Component({
  selector: 'app-extourne',
  templateUrl: './extourne.component.html',
  styleUrls: ['./extourne.component.css']
})
export class ExtourneComponent implements OnInit {

  multitransfer !: MultiTransfer;
  status ?: number;
  reference ?: string;


  constructor(private route: ActivatedRoute,
    private multitransfersService :MultitransfersService) {

      this.reference = this.route.snapshot.params['reference'];
      this.multitransfersService.GetMultitransfer_byreference(this.reference).subscribe((data:any) => {
          this.multitransfer = data;
          console.log(this.multitransfer);
      }, (error:any) => {
        window.location.href="/list_Transfert";
      });
  }

  ngOnInit(): void {
    this.status = this.multitransfer.transfers[0].transfer_status;
  }

  blqstatus(){
    return this.multitransfer.transfers[0].transfer_status==1 || this.multitransfer.transfers[0].transfer_status==6;
  }

  setExtortTransfer(multitransfer:any){
      this.multitransfer = multitransfer;
  }

}
