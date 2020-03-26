import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FlashMessageType } from '../models/FlashMessageType';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService, 
              private flashMessage: FlashMessagesService,
              private router: Router) { }


  checkLoggedIn() {
    this.authService.getAuth().subscribe(auth => {
      if(auth){
        this.router.navigate(['/']);
      }
    })
  }
 
  ngOnInit() {
    this.checkLoggedIn();
  }

  showFlashMessage(message: string, messageType: FlashMessageType){
    this.flashMessage.show(message, { cssClass: messageType, timeout: 4000 }
    )
  }

  onSubmit(){
    console.log(this.email + this.password);
    this.authService.login(this.email, this.password).then(response => {

        this.showFlashMessage('You are now logged in!', FlashMessageType.Success);
        this.router.navigate(['/'])
      })
      .catch(err => {
        this.showFlashMessage(err.message, FlashMessageType.Danger);
      });
  }

}
