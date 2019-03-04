import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestBindingComponent } from './testbinding/testbinding.component';
import { TesteventsComponent } from './testevents/testevents.component';
import { TesttwowaybindingComponent } from './testtwowaybinding/testtwowaybinding.component';
import { TeststructuraldirectivesComponent } from './teststructuraldirectives/teststructuraldirectives.component';
import { TestcomponentinteractionComponent } from './testcomponentinteraction/testcomponentinteraction.component';
import { TestpipesComponent } from './testpipes/testpipes.component';
import { TestdepedencyinjectionComponent } from './testdepedencyinjection/testdepedencyinjection.component';
import { TestdepedencyinjectiondetailsComponent } from './testdepedencyinjectiondetails/testdepedencyinjectiondetails.component';
import { TestdependencyinjectionserviceService } from './testdependencyinjectionservice.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    TestBindingComponent,
    TesteventsComponent,
    TesttwowaybindingComponent,
    TeststructuraldirectivesComponent,
    TestcomponentinteractionComponent,
    TestpipesComponent,
    TestdepedencyinjectionComponent,
    TestdepedencyinjectiondetailsComponent,
    routingComponents,
    PageNotFoundComponent,
    DepartmentDetailComponent,
    DepartmentOverviewComponent,
    DepartmentContactComponent // Components that have routing capabilities
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  // providers: [TestdependencyinjectionserviceService], (No longer needed in Angular 6, see @Injectable)
  bootstrap: [AppComponent]
})
export class AppModule { }
