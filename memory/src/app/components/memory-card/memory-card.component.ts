import { CardService } from './../../services/cardservice.service';
import { Component, OnInit } from '@angular/core';
import { card } from 'src/app/models/memorycard';

@Component({
  selector: 'app-memory-card',
  templateUrl: './memory-card.component.html',
  styleUrls: ['./memory-card.component.scss']
})
export class MemoryCardComponent implements OnInit {

  firstCard: boolean = false;
  selectedCard: boolean = false;

  cards: card[];

  card1: card = { id: 0, content: '', flipped: false, matched: false};              
  card2: card = { id: 0, content: '', flipped: false, matched: false};  

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.getCards().subscribe(cards => {
      this.cardService.shuffleDeck(cards);
      this.cards = cards;
      this.firstCard = false;
    });
  }

  selectCard(target){

    if (this.selectedCard) {
      return false
   }

   this.selectedCard = true
   
  target.classList.toggle('flip')

  target.classList.toggle('is-active')
  this.selectedCard = false;
  }
}
