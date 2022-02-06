import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {ProfilComponent} from './compte/profil/profil.component';
import { LoginGuard } from './guard/login.guard';
import { NavMatComponent } from './Menu/nav-mat/nav-mat.component';
import { TransferComponent } from './transfer/transfer.component';
import { SearchByCinComponent } from './transfer/search-by-cin/search-by-cin.component';
import { ViewTransfersComponent } from './view-transfers/view-transfers.component';
import { TransferInfosComponent } from './view-transfers/transfer-infos/transfer-infos.component';
import { ExtourneComponent } from './extourne/extourne.component';
import { ServeTransferComponent } from './serve-transfer/serve-transfer.component';
import { ServeTransferByWalletComponent } from './serve-transfer-by-wallet/serve-transfer-by-wallet.component';
import { AddClientComponent } from './client/add-client/add-client.component';


const routes: Routes = [
  { path:'', component : NavMatComponent},
  { path:'profile',canActivate: [ LoginGuard ], component : ProfilComponent },
  { path:'effectuer_Transfert',canActivate : [LoginGuard], component : TransferComponent },
  { path:'effectuer_Transfert/espece/recherche_client',canActivate : [LoginGuard], component : SearchByCinComponent },
  { path:'list_Transfert',canActivate : [LoginGuard], component : ViewTransfersComponent },
  { path:'infos_Transfert/:reference',canActivate : [LoginGuard], component : ExtourneComponent },
  { path:'serve_Transfert',canActivate : [LoginGuard], component : ServeTransferComponent },
  { path:'serve_Transfert_wallet',canActivate : [LoginGuard], component : ServeTransferByWalletComponent },
  { path:'add_client',canActivate : [LoginGuard], component : AddClientComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
