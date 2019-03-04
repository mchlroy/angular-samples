import { Component, OnInit } from '@angular/core';
import { TestdependencyinjectionserviceService } from '../testdependencyinjectionservice.service';
import { Observable, ObservableLike } from 'rxjs';
import { IEmployee } from '../employee';

@Component({
  selector: 'app-testdepedencyinjection',
  template: `
    <h1>Dependency Injection</h1>
    <h2>Employee List</h2>
    <h3>{{errorMsg}}</h3>
    <ul *ngFor="let employee of employees">
      <li>{{employee.name}}</li>
    </ul>
  `,
  styles: [`
  `]
})
export class TestdepedencyinjectionComponent implements OnInit {

  public employees = [];
  public errorMsg = "";
  constructor(private employeeService: TestdependencyinjectionserviceService) { 

  }

  ngOnInit() {
    this.employeeService.getEmployees()
      .subscribe(
        (data : IEmployee[]) => this.employees = data, 
        (error : string) => this.errorMsg = error
      );
  }

}
