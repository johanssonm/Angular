import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from './../../services/client.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from '../models/Client';
import { FlashMessageType } from '../models/FlashMessageType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
})
export class AddClientComponent implements OnInit {

  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  }

  disableBalanceOnAdd: boolean = true;
  @ViewChild('clientForm', { static: true }) form: any;
  
  constructor(private clientService: ClientService, private flashMessage: FlashMessagesService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit({ value, valid } : { value: Client, valid: boolean }) {

      if(!value.balance){
        value.balance = 0;
      }
      if(!valid){
        this.showFlashMessage('Please fill out form correctly', FlashMessageType.Danger);
      }
      else{

        this.showFlashMessage('User was added', FlashMessageType.Success);
        this.clientService.newClient(value);
        this.router.navigate(['/']);
      }
      console.log(value, valid);
  }

  showFlashMessage(message: string, messageType: FlashMessageType){
    console.log(messageType);
    this.flashMessage.show(message, { cssClass: messageType, timeout: 4000 }
    )
  }



}
