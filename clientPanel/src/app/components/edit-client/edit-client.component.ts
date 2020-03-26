import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from './../../services/client.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from '../models/Client';
import { FlashMessageType } from '../models/FlashMessageType';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  id: string;
  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  }

  disableBalanceOnEdit: boolean = true;

  constructor(private clientService: ClientService, 
    private flashMessage: FlashMessagesService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
      this.fetchClient();
  }

  showFlashMessage(message: string, messageType: FlashMessageType){
    console.log(messageType);
    this.flashMessage.show(message, { cssClass: messageType, timeout: 4000 }
    )
  }
  onSubmit({ value, valid } : { value: Client, valid: boolean }) {

      if(!valid){
        this.showFlashMessage('Please fill out form correctly', FlashMessageType.Danger);
      }
      else{
        value.id = this.id;
        this.clientService.updateClient(value);
        this.showFlashMessage('User was updated', FlashMessageType.Success);
        this.router.navigate(['/client/' + this.id ]);
      }
      console.log(value, valid);
  }


  fetchClient() {
    this.id = this.route.snapshot.params['id'];
    this.clientService.getClient(this.id).subscribe(client => {
      if(client != null){
        this.client = client;
      }
      else{
        console.log(Error);
      }

    });
  }




}
