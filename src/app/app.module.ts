import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeModule } from './employee/employee.module';
import { LogService } from './log.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EmployeeModule
  ],
  providers: [
    LogService,
    { provide: 'LogPrefix', useValue: 'LOG' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
