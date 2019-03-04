import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testtwowaybinding',
  template: `
    <h1>
      Two-Way Bindings
    </h1>
    <form>
    <input [(ngModel)]="name" name="name"
    #name="ngModel" type="text" />
    </form>
    
    {{name}}
  `,
  styles: [`
  
  `]
})
export class TesttwowaybindingComponent implements OnInit {

  public name = "allo ";

  constructor() { }

  ngOnInit() {
  }

  logMessage(value) {
    console.log(value);
  }

}
