import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  posts = [
    {
      title: 'Neat Tree Plantaion ',
      imageUrl: 'assets/tree.jpeg',
      username: 'Metal Club:',
      content: 'Trees make the environment cleaner and provide us with oxygen. They’re essential for life to flourish.'
    },
    {
      title: 'Snowy Mountain Trip',
      imageUrl: 'assets/mountain.jpeg',
      username: 'Outside Club: ',
      content: 'Every mountain top is within reach if you just keep climbing.” “Every man should pull a boat over a mountain once in his life.” '
    },
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'Biking Club: ',
      content: 'When you ride hard on a mountain bike, sometimes you fall, otherwise you are not riding hard.'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
