import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
  value = '../assets/images/dice/side_3.png'
  bool = false;
  constructor() { }
  ngOnInit() { }
 
 
  diceChange(){
      this.value = `../assets/images/dice/side_${Math.floor(Math.random() * 6) + 1}.png`;
    }
}
