import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgentService } from 'src/app/services/agent.service';
import { TransferService } from 'src/app/services/transfer.service';
import { Client } from 'src/Models/agent';

@Component({
  selector: 'app-transfer-by-account-debit',
  templateUrl: './transfer-by-account-debit.component.html',
  styleUrls: ['./transfer-by-account-debit.component.css']
})
export class TransferByAccountDebitComponent implements OnInit {

  
  show_user_infos : boolean = false;
  submitted = false;
  errorphone_num ?: string = "";
  search_phone_num!: FormGroup;

  user ?: Client;

  constructor(private formBuilder: FormBuilder,public transferService : TransferService ,private agentServ : AgentService) { }

  invalidphone_num()
  {
  	return (this.submitted && this.errorphone_num != "");
  }


  ngOnInit(): void {
    this.search_phone_num = this.formBuilder.group({
      phone_num: ['', Validators.required],
    });
  }

  ngAfterViewInit(){
    
  }

  onSubmit(){
    this.submitted = true ;
    this.errorphone_num=""
    if(this.search_phone_num.invalid) this.errorphone_num = "Champ vide !"
    else{
      this.agentServ.getClient_byPH(this.search_phone_num.get("phone_num")?.value).subscribe((data:any)=>{
          this.user = data;
          this.show_user_infos = true;
      },(error:any)=>{
          this.errorphone_num = "Inexist phone number !";
      })
    }
  }


  set_show_user_infos(show_user_infos: boolean) {
    this.show_user_infos = show_user_infos;
  }

  suivant(){
    this.transferService.multiTransfer.id_client = this.user?.id!;
    this.transferService.multiTransfer.sender_fname = this.user?.firstName!;
    this.transferService.multiTransfer.sender_lname = this.user?.lastName!;
    this.transferService.multiTransfer.sender_phnumber = this.user?.phoneNumber!;
    this.transferService.multiTransfer.request_by_prospect_client = false;
    this.transferService.sender_selected = true ;
    console.log(this.transferService.multiTransfer);
  }
}
