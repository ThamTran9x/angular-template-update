import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  clickTime = 0;
  buttonName = 'Display Details';
  clicks = [];
  constructor() {
  }

  ngOnInit(): void {}

  onTogglePass() {
    this.clickTime++;
    // this is for increment number
    // this.clicks.push(this.clickTime);
    this.buttonName = this.clickTime % 2 === 1 ? 'Hide Details' : 'Display Details';
    // this is for timestamp
    this.clicks.push(new Date());
  }

  colorNumber() {
    return this.clicks.length > 4 ? 'blue' : 'none';
  }
}
