import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css'],
})
export class SecondChildComponent implements OnInit {
  username = 'My Name';
  serverId: number = 10;
  serverStatus: string = 'offline';
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {}

  getColor() {
    return this.serverStatus === 'offline' ? 'red' : 'green';
  }
}
