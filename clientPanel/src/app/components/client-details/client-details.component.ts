import { Client } from './../models/Client';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessageType } from '../models/FlashMessageType';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  id: string;
  client: Client = { }
  hasBalance: boolean = false;
  showBalanceUpdateInput: boolean = false;
  
  constructor(private clientService: ClientService, 
              private route: ActivatedRoute, 
              private flashMessage: FlashMessagesService,
              private router: Router) {

               }

  fetchClient() {
    this.id = this.route.snapshot.params['id'];
    this.clientService.getClient(this.id).subscribe(client => {
      if(client != null){
        if(client.balance > 0){
          this.hasBalance = true;
        }
      }
      this.client = client;
    });
  }


  ngOnInit() {
    this.fetchClient();
  }

  showFlashMessage(message: string, messageType: FlashMessageType){
    console.log(messageType);
    this.flashMessage.show(message, { cssClass: messageType, timeout: 4000 }
    )
  }

  updateBalance(){

    this.clientService.updateClient(this.client);
    this.flashMessage.show('Balance updated', { cssClass: 'alert-success', timeout: 4000 })
  }

  onDeleteClick(){
    if(confirm('Are you sure?')){
      this.clientService.deleteClient(this.client);
      this.showFlashMessage('User was removed', FlashMessageType.Info);
      this.router.navigate(['/']);
    }
  }

}
