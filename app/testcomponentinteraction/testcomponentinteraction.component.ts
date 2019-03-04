import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';   // Import Input, Output, EventEmitter from core

@Component({
  selector: 'app-testcomponentinteraction',
  template: `
    <h1>Component Interactions</h1>
    <h2>Hello {{name}}</h2>
    <button (click)="fireEvent()">Send Event (Big title)</button>
  `,
  styles: [`

  `]
})
export class TestcomponentinteractionComponent implements OnInit {

  // Comes from parent (AppComponent)
  // @Input() public parentData;
  @Input('parentData') public name; // Alias
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireEvent() {
    this.childEvent.emit("Hey Mike");
  }
}
