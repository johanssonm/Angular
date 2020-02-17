import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    { 
      title: 'Neat tree',
      imageUrl: 'assets/tree.jpeg',
      username: '@nature',
      content: 'I saw this neat tree today.' 
    },    
    { 
      title: 'Snowy mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: '@mountain12',
      content: 'Here is a picture of a snowy mountain.' 
    },    
    { 
      title: 'Mountain biking',
      imageUrl: 'assets/biking.jpeg',
      username: '@biking45',
      content: 'The view when I went biking.' 
    }
  ]
}
