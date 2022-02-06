import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AgentService } from 'src/app/services/agent.service';
import { TransferService } from 'src/app/services/transfer.service';
import { Client } from 'src/Models/agent';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  user ?: Client;

  valid_infos : boolean = false;

  titles : any = [
    {name: 'Mr .' },
    {name: 'Mme .' },
  ];

  videError : boolean = false;

  set_type_idcard : boolean = false;

  errorbirthday = "";
  errorEmail = "";
  errorAction = "";

  kycForm !: FormGroup;
  
  invalidbirthday(){
    return this.errorbirthday != "";
  }

  invalidEmail(){
    return this.errorEmail != "";
  }

  invalidAction(){
    return this.errorAction != "";
  }
  
  constructor(@Inject(FormBuilder) fb: FormBuilder,private transferService : TransferService,private agentService : AgentService) { 
    this.kycForm=new FormGroup ({
      title:new FormControl("Mr .",Validators.required),
      firstName:new FormControl('',Validators.required),
      lastName: new FormControl('', Validators.required),
      birthday: new FormControl('', Validators.required),
      idCard: new FormControl('', Validators.required),
      type_idcard:new FormControl(null, Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      Validity_of_IDCard: new FormControl(false, Validators.required),
      address: new FormControl('', Validators.required),
      city: new FormControl(null, Validators.required),
      country: new FormControl('Maroc', Validators.required),
      zipcode: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required,Validators.email]),
      })

  }

  ngOnInit(): void {
  }

  submit() {
    this.videError = false;
    this.errorbirthday = "";
    this.errorEmail = "";
    this.errorAction = "";
    var birthday = new Date(this.kycForm.value.birthday);
    var today = new Date();
    if((today.getFullYear() - birthday.getFullYear() <= 18) && 
        (today.getMonth() - birthday.getMonth() <= 0) ){
          this.errorbirthday = "l’Age légal (18 ans) !";
    }

    if(this.kycForm.controls.email.status == "INVALID"){
      this.errorEmail="Email invalide !"
    }

    if (this.kycForm.dirty) {
      if(this.kycForm.valid){
        if(!this.errorbirthday){
          this.user=this.kycForm.value;
          this.user!.role="client";
          this.user!.password="password";
          this.valid_infos = true;
        }
      }else {
        this.errorAction="Invalid fields !";
      }
    }else{
      this.errorAction="Invalid fields !";
    }
  }


  valide(){
    this.agentService.createClient(this.user).subscribe((data:any)=>{
      window.location.reload();
      console.log(data);
    },(error:any)=>{
      console.log(error);

    });
  }


  reset() {
    this.kycForm.reset();
    this.kycForm.controls['country'].setValue("Maroc");
    this.kycForm.controls['title'].setValue("Mr .");
    this.set_type_idcard = false;
  }

  set_id_type(event : any){
    this.set_type_idcard=true;
  }

  set_show_user_infos(show_user_infos: boolean) {
    this.valid_infos = show_user_infos;
  }

}
