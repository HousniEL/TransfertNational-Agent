import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MultitransfersService } from 'src/app/services/multitransfers.service';
import { MultiTransfer } from 'src/Models/Transfer';

@Component({
  selector: 'app-transfer-infos',
  templateUrl: './transfer-infos.component.html',
  styleUrls: ['./transfer-infos.component.css']
})
export class TransferInfosComponent implements OnInit {

 

    @Input() multitransfer !: any;
    
    status : string[]=[
      "A_servir",
      "Servie",
      "Extourner",
      "Restituer",
      "Bloquer",
      "Debloquer",
      "Desherencer"
    ]
    reference ?: string;

    constructor() {
    }

    ngOnInit(): void {
      
    }

}
