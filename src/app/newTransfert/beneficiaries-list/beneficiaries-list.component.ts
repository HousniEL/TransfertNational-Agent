import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { Transfer } from 'src/Models/Transfer';

@Component({
  selector: 'app-beneficiaries-list',
  templateUrl: './beneficiaries-list.component.html',
  styleUrls: ['./beneficiaries-list.component.css']
})
export class BeneficiariesListComponent implements OnInit, AfterViewInit {

  toggle : boolean = false;

  @Input() id_client ?: number;


  constructor( public mainComponent : MainComponent ) { }

  ngOnInit(): void {}

  fullName(transfer : any) : String{
    return transfer.receiver_fname + " " + transfer.receiver_lname;
  }

  ngAfterViewInit(): void {
    // HTML elements
    var accordian_button : any = document.getElementsByClassName("accordian-button")[0];

    accordian_button.addEventListener("click", () => {
      this.toggle = !this.toggle;
    });
  }

}
