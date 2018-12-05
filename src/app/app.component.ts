import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // for test purpose, will show on the page
  numX: number;

  numArr: Array<{even: boolean, numb: number}> = [];


  // can not be initialized inside,
  // it will show only one number at a time
  // button start must be disabled in the component
  onStartBtClick(num: number) {

    this.numX = num;

    // console.log('2 - Before num in AppComponent');
    // console.log(num);
    this.numArr.push({
      'even': (num % 2 === 0) ? true : false,
      'numb': num
    });
    // console.log('3 - After num in AppComponent');
    // console.log(num);
  }
}
