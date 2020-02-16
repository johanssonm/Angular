import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  password:string = '';
  useLetters:boolean = false;
  useNumbers:boolean = false;
  useSymbols:boolean = false;

  onChangeUserLetters(){
    this.useLetters = !this.useLetters;
  }

  onChangeUserNumbers(){
    this.useNumbers = !this.useNumbers;
  }
  onChangeUserSymbols(){
    this.useSymbols = !this.useSymbols;
  }



  onButtonClick() {
    console.log(this.useLetters);
    console.log(this.useNumbers);
    console.log(this.useSymbols);
    this.password = 'My password';
  }

  


}
