import { Component, OnInit,Inject } from '@angular/core';
import { Observable, SubscriptionLike,of } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AgentService } from 'src/app/services/agent.service';
import { Agent } from 'src/Models/agent';



@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})

export class ProfilComponent implements OnInit {

  //agent ?: Observable<agent>;
  agent ?: Agent;
  editPwordInd : Boolean = false;

  ancienPword ?: string;
  NouveauPword : string='';
  ConfirmPword : string ='';
  errors : any = {};


  constructor(private agentService :AgentService,
     private authService :  AuthenticationService) { }

  
   ngOnInit() { 
    this.authService.getCurrentUser().subscribe(resp => {
      this.agent=resp;
      console.log(resp)
    });

    }
    
    
    editPword(){
      this.editPwordInd=true;
    }
    
    updatePword(){
      this.errors={};
      if(this.NouveauPword.length >= 8){
       if(this.NouveauPword == this.ConfirmPword){
           console.log(this.ancienPword)
           this.agentService.updatepwd({
            currentPassword:this.ancienPword,
            newPassword:this.NouveauPword
           }).subscribe((data1:any) => {
             this.authService.Logout();
           },(err:any) => {
            this.errors.currentpwd="Mot de passe incorrect !"
           })
        }else {
          this.errors.confirmpwd = "Invalide !"      
        }
      }else{
         console.log('err8')
         this.errors.nouveaupwd = "Au moins 8 characters !" 
      }

  }
    
    

}
