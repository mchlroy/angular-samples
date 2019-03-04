import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testbinding',
  template: `
    <h1>
      Bindings
    </h1>
    <h2>
      Welcome {{name}}
    </h2>

    <input [id]="myId" type="text" value="Property Binding" />
    <input [disabled]="isDisabled" id="{{myId}}" type="text" value="Property Binding (disabled) and Attribute binding (id)" />
    <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="Property Binding alt. (disabled) and Attribute binding (id)" />

    <h2 class="text-success">Michael</h2>
    <h2 [class]="successClass">Michael</h2>
    <h2 class="text-special" [class]="successClass">Only take into account binding (not italic)</h2>
    <h2 [class.text-danger]="hasError">hasError</h2>

    <h2 [ngClass]="messageClasses">nbClass messageClasses</h2>

    <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding</h2>
    <h2 [style.color]="highlightColor">Style Binding 2</h2>

    <h2 [ngStyle]="titleStyles">nb-style titleStyles</h2>
  `,
  styles: [`
    .text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic;
    }
  `]
})
export class TestBindingComponent implements OnInit {

  public name = "Michael";
  public myId = "testId";
  public isDisabled = true;
  public successClass = "text-success";
  public hasError = true;
  public isSpecial = true;
  public highlightColor = "orange";
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }

  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  constructor() { }

  ngOnInit() {
  }

}
