import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  randomText: string = lorem.sentence();
  inputText: string = '';
  success: boolean = false;

  onInput(value: string){

    this.inputText = value;
    this.isSuccess(this.inputText);
  }

  validateInput(original: string, input: string){

    if(!input){
      return 'pending';
    }

    return original === input ? 'correct' : 'incorrect';
  }


  isSuccess(input: string){

    if(this.randomText === input){
      this.success = true;
    }
    else{
      this.success = false;
    }

    this.inputText = input;
  }

}
