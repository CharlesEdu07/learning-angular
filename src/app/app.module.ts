import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { ColoredFieldDirective } from './colored-field.directive';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCardComponent,
    EmployeeFormComponent,
    ColoredFieldDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
