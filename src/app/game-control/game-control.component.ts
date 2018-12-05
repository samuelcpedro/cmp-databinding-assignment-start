import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  num = 0;

  // output property
  @Output() startBtClicked = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    setInterval(() => {
      // console.log('Before num in GameControlComponent');
      // console.log(this.num);
      this.startBtClicked.emit(++this.num);
      // console.log('After num in GameControlComponent');
      // console.log(this.num);
    }, 1000);
  }
}
