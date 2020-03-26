import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-card',
  templateUrl: './test-card.component.html',
  styleUrls: ['./test-card.component.scss']
})
export class TestCardComponent implements OnInit {

  switching: boolean = false;
  cardTransitionTime: number = 500;

  constructor() { }

  ngOnInit(): void {

  }

  flipCard (target) {

    if (this.switching) {
       return false
    }
    this.switching = true
    
    target.classList.toggle('is-switched')

      target.classList.toggle('is-active')
      this.switching = false;
    

 }



  

}
