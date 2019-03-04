import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testevents',
  template: `
    <h1>
      Events
    </h1>
    <h2>
      Welcome {{name}}
    </h2>
    <button (click)="onClick($event)">Greet</button>
    <button (click)="greeting='Welcome Me'">Greet</button>
    <h2>{{greeting}}</h2>

    <input #myInput type="text" />
    <button (click)="logMessage(myInput)">Log</button>
  `,
  styles: [`
  
  `]
})
export class TesteventsComponent implements OnInit {

  public name = "Michael";
  public greeting = "";

  constructor() { }

  ngOnInit() {
  }

  onClick(event : MouseEvent) {
    console.log(event);
    this.greeting = "Welcome to ME";
  }

  logMessage(value : string) {
    console.log(value);
  }
}
