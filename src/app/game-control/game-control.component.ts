import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  private num: number = 0;
  private refSI: any;

  // output property
  @Output() startBtClicked = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  startGame() {

    // reset the counting
    // clearInterval(this.refSI);

    // Reset counting
    // this.num = 0;

    // count +1 every second
    this.refSI = setInterval(() => {
      // console.log('1 - Before num in GameControlComponent');
      // console.log(this.num);
      this.startBtClicked.emit(++this.num);
      // console.log('4 - After num in GameControlComponent');
      // console.log(this.num);
    }, 1000);
  }

  // End game reset the counting
  endGame() {
    clearInterval(this.refSI);
  }
}
