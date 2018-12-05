import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  private num = 0;
  constructor() { }

  ngOnInit() {
  }

  startGame() {
    setInterval(() => {
      ++this.num;
      console.log(this.num);
    }, 1000);
  }
}
