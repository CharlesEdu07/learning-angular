import { Injectable } from "@angular/core";
import { LogService } from "./log.service";

@Injectable()
export class EmployeeService {
  lastId = 1;
  employee = [
    {
      id: 1,
      name: 'John Doe',
    }
  ];

  constructor(private logService: LogService) {

  }

  add(name: string) {
    this.logService.log(`Adding employee: ${name}`);

    const employee = {
      id: ++this.lastId,
      name: name,
    }

    this.employee.push(employee);

    console.log(JSON.stringify(this.employee));
  }

  get() {
    return this.employee;
  }
}
