import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numX: number;

  onStartBtClick(num: number) {
    // console.log('Before num in AppComponent');
    // console.log(num);
    this.numX = num;
    // console.log('After num in AppComponent');
    // console.log(num);
  }
}
