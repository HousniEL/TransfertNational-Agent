import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgentService } from 'src/app/services/agent.service';
import { TransferService } from 'src/app/services/transfer.service';
import { MainDebitComponent } from '../main-debit/main-debit.component';
import { Beneficiaire } from 'src/Models/agent';


@Component({
  selector: 'app-add-beneficiary-debit',
  templateUrl: './add-beneficiary-debit.component.html',
  styleUrls: ['./add-beneficiary-debit.component.css']
})
export class AddBeneficiaryDebitComponent implements OnInit {

  submitted = false;
  error : any = "";
  beneficiary !: FormGroup;


  @Input() id_client ?: number;
  request_by_prospect_client ?: boolean = false;

  beneficiaires ?: Beneficiaire[] ;

  constructor(private formBuilder : FormBuilder, private mainComponent : MainDebitComponent 
            ,private agentServ : AgentService , private transferT : TransferService) {

      this.request_by_prospect_client=false;
      this.agentServ.getClient_recipients(this.transferT.multiTransfer.id_client).subscribe((data:any)=>{
          this.beneficiaires = data;
      },(error:any)=>{
        console.log(error.error);
      })
   }

  invalidNom()
  {
  	return (this.submitted && this.beneficiary.controls.last_name.errors != null);
  }

  invalidPrenom()
  {
  	return (this.submitted && this.beneficiary.controls.first_name.errors != null);
  }

  invalidNumTel()
  {
  	return (this.submitted && this.beneficiary.controls.phone_number.errors != null);
  }
  
  invalidAmount()
  {
  	return (this.submitted && this.beneficiary.controls.amount.errors != null);
  }

  ngOnInit(): void {

    this.beneficiary = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone_number: ['', Validators.required],
      amount: ['', Validators.required]
    });

  }

  ngAfterViewInit(): void {
      var select : any = document.getElementById("older_beneficiary");
      var resetB : any = document.getElementById("annuler");
      if (select!=null && select!=undefined){
        select.addEventListener("change", (event : any) => {
          if(this.beneficiaires!=undefined){
            var infos = this.beneficiaires[event.target.selectedIndex - 1];
            this.beneficiary.controls.first_name.setValue(infos.firstName);
            this.beneficiary.controls.last_name.setValue(infos.lastName);
            this.beneficiary.controls.phone_number.setValue(infos.phoneNumber);
          }
          
        });
      }
      resetB.addEventListener("click", () => {
        this.error = "";
        this.submitted = false;
      });

    }

  onSubmit(){
    this.error = "";
    this.submitted = true;
    if( this.beneficiary.invalid == true ){
      return;
    } else {
      var form: any = document.getElementById('beneficiary');
      var formData = new FormData(form);
      var done = this.mainComponent.transferT.ajouter({
        receiver_fname : formData.get("first_name")!.toString(),
        receiver_lname : formData.get("last_name")!.toString(),
        receiver_phnumber : formData.get("phone_number")!.toString(),
        transfer_amount : Number(formData.get("amount")),
      })
      if(done === true){
        for(let formElement of form){
          if(formElement.id === "annuler"){
            formElement.click();
          }
          if(formElement.id === "ajouter"){
            var i = document.createElement('li');
            i.setAttribute('data-dismiss', 'modal');
            i.style.display = 'none';
            formElement.append(i);
            i.click();
            formElement.removeChild(i);
            i.remove();
          }
        }
      } else {
        this.error = done;
      }
    }
  }

}
