import { Component, OnInit } from '@angular/core';
import { TestdependencyinjectionserviceService } from '../testdependencyinjectionservice.service';
import { IEmployee } from '../employee';

@Component({
  selector: 'app-testdepedencyinjectiondetails',
  template: `
    
    <h1>Dependency Injection</h1>
    <h2>Employee List Details</h2>
    <h3>{{errorMsg}}</h3>
    <ul *ngFor="let employee of employees">
      <li>{{employee.id}}. {{employee.name}} - {{employee.age}}</li>
    </ul>
  `,
  styles: [`
  `]
})
export class TestdepedencyinjectiondetailsComponent implements OnInit {

  public employees : Array<IEmployee> = [];
  public errorMsg : string = "";

  // Injected service
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
