import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  lastId = 0;
  name = 'Charles';
  added = false;
  @Output() addedEmployee = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  add() {
    this.added = true;

    const employee = {
      id: ++this.lastId,
      name: this.name,
    };

    this.addedEmployee.emit(employee);
  }
}
