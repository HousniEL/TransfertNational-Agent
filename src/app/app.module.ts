import { AppRoutingModule } from './app-routing.module';
import { BrowserModule} from '@angular/platform-browser';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {NgxPaginationModule} from 'ngx-pagination/dist/ngx-pagination';
import { NgModule} from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgpSortModule } from "ngp-sort-pipe";
import {FormsModule,ReactiveFormsModule} from '@angular/forms';




 
import { AppComponent } from './app.component';
import { NavMatComponent } from './Menu/nav-mat/nav-mat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ProfilComponent } from './compte/profil/profil.component';
import { LoginGuard } from './guard/login.guard';
import { RequestsInterceptor } from './Interceptor/requests.interceptor';
import { TransferByAccountDebitComponent } from './transfer/transfer-by-account-debit/transfer-by-account-debit.component';
import { TransferByCashComponent } from './transfer/transfer-by-cash/transfer-by-cash.component';
import { TransferComponent } from './transfer/transfer.component';
import { SearchByCinComponent } from './transfer/search-by-cin/search-by-cin.component';
import { KycTableComponent } from './transfer/kyc-table/kyc-table.component';
import { SetSenderKycInfosComponent } from './transfer/set-sender-kyc-infos/set-sender-kyc-infos.component';
import { ViewTransfersComponent } from './view-transfers/view-transfers.component';
import { TransferInfosComponent } from './view-transfers/transfer-infos/transfer-infos.component';
import { ExtourneComponent } from './extourne/extourne.component';
import { ExtourneModalComponent } from './extourne/extourne-modal/extourne-modal.component';
import { ServeTransferComponent } from './serve-transfer/serve-transfer.component';
import { RecipientSearchComponent } from './serve-transfer/recipient-search/recipient-search.component';
import { AddBeneficiaryComponent } from './newTransfert/add-beneficiary/add-beneficiary.component';
import { BeneficiariesListComponent } from './newTransfert/beneficiaries-list/beneficiaries-list.component';
import { MainComponent } from './newTransfert/main/main.component';
import { PincodeCheckComponent } from './serve-transfer/pincode-check/pincode-check.component';
import { MainDebitComponent } from './newTransfert/main-debit/main-debit.component';
import { ServeTransferByWalletComponent } from './serve-transfer-by-wallet/serve-transfer-by-wallet.component';
import { OtpCheckComponent } from './serve-transfer-by-wallet/otp-check/otp-check.component';
import { RecipientAccountSearchComponent } from './serve-transfer-by-wallet/recipient-account-search/recipient-account-search.component';
import { AddClientComponent } from './client/add-client/add-client.component';
import { AddBeneficiaryDebitComponent } from './newTransfert/add-beneficiary-debit/add-beneficiary-debit.component';
import { BeneficiariesListDebitComponent } from './newTransfert/beneficiaries-list-debit/beneficiaries-list-debit.component';




@NgModule({
  declarations: [
    AppComponent,
    NavMatComponent,
    AuthentificationComponent,
    ProfilComponent,
     TransferByAccountDebitComponent, TransferByCashComponent, TransferComponent, SearchByCinComponent, KycTableComponent, SetSenderKycInfosComponent, ViewTransfersComponent, TransferInfosComponent, ExtourneComponent, ExtourneModalComponent, ServeTransferComponent, RecipientSearchComponent, AddBeneficiaryComponent, BeneficiariesListComponent , MainComponent, PincodeCheckComponent, MainDebitComponent, ServeTransferByWalletComponent, OtpCheckComponent, RecipientAccountSearchComponent, AddClientComponent, AddBeneficiaryDebitComponent, BeneficiariesListDebitComponent
  ],

  imports: [
    NgpSortModule,NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule,
    MatNativeDateModule,MatButtonToggleModule,MatSidenavModule,MatIconModule,MatListModule,
    MatFormFieldModule,MatSelectModule,
    BrowserAnimationsModule,BrowserModule,FormsModule,ReactiveFormsModule
  ],
  
  providers: [
    LoginGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestsInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }