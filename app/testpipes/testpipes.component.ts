import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testpipes',
  template: `
    <h1>Pipes</h1>
    <h2>{{name}}</h2>
    <h2>{{name | lowercase }} (lowercase)</h2>
    <h2>{{name | uppercase }} (uppercase)</h2>
    <h2>{{message | titlecase }} (titlecase)</h2>
    <h2>{{name | slice:3 }} (slice:3)</h2>
    <h2>{{name | slice:3:5 }} (slice:3:5)</h2>
    <h2>{{name | slice:3:5 }} (slice:3:5)</h2>
    <h2>{{person | json }} (json)</h2>
    `
    +
    // {min nb of int}.{min nb of dec}-{max nb of dec}
    `
    <h2>{{5.678 | number:'1.2-3' }} (number:'1.2-3')</h2>
    <h2>{{5.678 | number:'3.4-5' }} (number:'3.4-5')</h2>
    <h2>{{5.678 | number:'3.1-2' }} (number:'3.1-2')</h2>
    
    <h2>{{0.25 | percent }} (percent)</h2>
    
    <h2>{{0.25 | currency }} (currency)</h2>
    <h2>{{0.25 | currency:'GBP' }} (currency:'GBP')</h2>
    <h2>{{0.25 | currency:'GBP': 'code' }} (currency:'GBP': 'code')</h2>
    <h2>{{0.25 | currency:'CAD' }} (currency:'CAD')</h2>

    <h2>{{date}}</h2>
    <h2>{{date | date:'short'}} (date:'short')</h2>
    <h2>{{date | date:'shortDate'}} (date:'shortDate')</h2>
    <h2>{{date | date:'shortTime'}} (date:'shortTime')</h2>
    <h2>{{date | date:'medium'}} (date:'medium')</h2>
    <h2>{{date | date:'mediumDate'}} (date:'mediumDate')</h2>
    <h2>{{date | date:'mediumTime'}} (date:'mediumTime')</h2>
    <h2>{{date | date:'long'}} (date:'long')</h2>
    <h2>{{date | date:'longDate'}} (date:'longDate')</h2>
    <h2>{{date | date:'longTime'}} (date:'longTime')</h2>
  `,
  /*
    short: 6/9/18, 12:14 PM;
    shortDate: 6/9/18;
    shortTime: 12:14 PM;
    medium: Jun 9, 2018, 12:15:56 PM;
    mediumDate: Jun 9, 2018;
    mediumTime: 12:15:56 PM;
    long: June 9, 2018 at 12:15:56 PM GMT-4;
    longTime:  June 9, 2018;
    longDate:  12:15:56 PM GMT-4;

  */
  styles: [`
  `]
})
export class TestpipesComponent implements OnInit {
  public name = "Michael";
  public message = "Welcome to something";
  public person = {
    "firstName": "John",
    "lastName": "Doe"
  }

  public date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
