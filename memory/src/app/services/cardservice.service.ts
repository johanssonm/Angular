import { Injectable } from '@angular/core';
import { card } from '../models/memorycard';
import { Observable } from 'rxjs';
import { of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CardService {
  
  cards: card[] = [
    { content: '1', id: 1, flipped: false, matched: false },
    { content: '2', id: 2, flipped: false, matched: false },
    { content: '3', id: 3, flipped: false, matched: false },
    { content: '4', id: 4, flipped: false, matched: false },
    { content: '5', id: 5, flipped: false, matched: false },
    { content: '6', id: 6, flipped: false, matched: false },               
    { content: '1', id: 1, flipped: false, matched: false },
    { content: '2', id: 2, flipped: false, matched: false },
    { content: '3', id: 3, flipped: false, matched: false },
    { content: '4', id: 4, flipped: false, matched: false },
    { content: '5', id: 5, flipped: false, matched: false },
    { content: '6', id: 6, flipped: false, matched: false }
  ];
  constructor() { }

  getCards(): Observable<card[]>{
      return of(this.cards.sort((a, b) =>{
        return b.id = a.id;
      }));
  }

  updateCard(card: card){

    this.cards.forEach((cur) => {
        if(card.id === cur.id){
          cur = card;
          console.log(card);
        }

    })
  }

  shuffleDeck(array: card[]) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
}
