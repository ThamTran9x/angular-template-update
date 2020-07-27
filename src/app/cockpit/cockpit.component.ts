import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Element } from '../element.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  newElementName = '';
  newElementContent = '';
  @Output() newElementAdded = new EventEmitter<Element>();
  constructor() {}

  ngOnInit(): void {}

  onAddServer(): void {
    this.newElementAdded.emit(new Element('server', this.newElementName, this.newElementContent));
    // return {type: 'server', name: this.newElementName, content: this.newElementContent};
  }

  onAddBlueprint(): void {
    this.newElementAdded.emit(new Element('blueprint', this.newElementName, this.newElementContent));
  }
}
