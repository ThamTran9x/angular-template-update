import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  second = 0;
  isTimeRunning = false;
  interval: any;
  @Output() number = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onStartGame() {
    if (!this.isTimeRunning) {
      this.isTimeRunning = !this.isTimeRunning;
      this.interval = window.setInterval(() => {
        this.number.emit(this.second + 1);
        this.second++;

      }, 1000);
    }
  }

  onStopGame() {
    if (this.isTimeRunning) {
      clearInterval(this.interval);
      this.isTimeRunning = !this.isTimeRunning;
    }
  }
}
