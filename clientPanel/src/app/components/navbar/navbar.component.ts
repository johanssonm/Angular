import { Observable } from 'rxjs';
import { AuthService } from './../../services/auth.service';
import { Client } from './../models/Client';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessageType } from '../models/FlashMessageType';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean;
  loggedInUser: string;
  showRegister: boolean;

  constructor(private authService: AuthService, 
    private flashMessage: FlashMessagesService,
    private router: Router) {
      this.checkLoggedIn();
      console.log(this.isLoggedIn);
      console.log(this.loggedInUser);
     }

     checkLoggedIn() {
      this.authService.getAuth().subscribe(auth => {
        if(auth){
          this.isLoggedIn = true;
          this.loggedInUser = auth.email;
        } else{
          this.isLoggedIn = false;
        }
      })
      
    }

  ngOnInit() {
this.checkLoggedIn();


  }

}
