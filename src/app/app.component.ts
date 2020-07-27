import { Component, OnInit } from '@angular/core';
import { Element } from './element.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  element = new Element('blueprint', 'Test1', 'content of test1');
  elementList = [];
  evenList = [];
  oddList = [];
  value = 25;

  ngOnInit(): void {
  }

  onNewElementAdded(element: Element) {
    console.log('--> element = ' + JSON.stringify(element));

    this.elementList.push(element);
  }

  getEmittedNum(event: number) {
    if (event % 2 === 0) {
      this.evenList.push(event);
      console.log('-->even: ' + this.evenList);

    } else {
      this.oddList.push(event);
      console.log('odd: ' + this.oddList);
    }
  }
}
