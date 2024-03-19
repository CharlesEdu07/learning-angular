import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employees = [];

  whenAdd(employee: any) {
    this.employees.push(employee);
  }
}
