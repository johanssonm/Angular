import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  amountOfChars:number = 0;
  password:string = '';
  useLetters:boolean = false;
  useNumbers:boolean = false;
  useSymbols:boolean = false;
  message:string = '';

  onChangeLength(value: string){
    this.message = '';

    let number = parseInt(value);

    if(!isNaN(number)){
      this.amountOfChars = parseInt(value);
    }

    else{
      this.message =  value + ' is not a number';
    }

  }

  onChangeUseLetters(){
    this.useLetters = !this.useLetters;
  }

  onChangeUseNumbers(){
    this.useNumbers = !this.useNumbers;
  }
  onChangeUseSymbols(){
    this.useSymbols = !this.useSymbols;
  }



  onButtonClick() {

    const numbers = '123456789'
    const letters = 'abcdefghijklmnopqrstuvwxyzåäö'
    const symbols = '!@#$%*&*()'
    
    let validChars = '';

    if(this.useLetters){
      validChars += letters;
    }

    if(this.useNumbers){
      validChars += numbers;
    }

    if(this.useSymbols){
      validChars += symbols;
    }

    let generatedPassword = '';

    if(this.amountOfChars > 0){
      for(let i = 0; i < this.amountOfChars; i++){
        const index = Math.floor(Math.random() * validChars.length)
        generatedPassword += validChars[index];
      }
    }


    this.password = generatedPassword;
  }

  


}
