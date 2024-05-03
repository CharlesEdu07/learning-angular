import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmployeeService } from 'app/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  employeeService: EmployeeService;

  constructor() {
    this.employeeService = new EmployeeService();
  }

  add(name: string) {
    this.employeeService.add(name);
  }
}
