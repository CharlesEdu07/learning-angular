import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { EmployeeService } from './employee.service';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ],
  declarations: [
    EmployeeFormComponent,
    EmployeeCardComponent
  ],
  exports: [
    EmployeeFormComponent,
    EmployeeCardComponent
  ],
  providers: [
    EmployeeService
  ]
})
export class EmployeeModule { }
