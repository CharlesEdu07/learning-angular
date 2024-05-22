import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { LogService } from './log.service';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCardComponent,
    EmployeeFormComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    EmployeeService,
    LogService,
    { provide: 'LogPrefix', useValue: 'LOG' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
