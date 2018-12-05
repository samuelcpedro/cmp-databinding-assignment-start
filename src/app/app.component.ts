import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numX: number;

  onStartBtClick(num: number) {
    // console.log('2 - Before num in AppComponent');
    // console.log(num);
    this.numX = num;
    // console.log('3 - After num in AppComponent');
    // console.log(num);
  }
}
