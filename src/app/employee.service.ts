export class EmployeeService {
  lastId = 1;

  employee = [
    {
      id: 1,
      name: 'John Doe',
    }
  ];

  add(name: string) {
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

export class AbbreviatedEmployeeService extends EmployeeService {

  constructor(private characterLimit: number) {
    super();
  }

  add(name: string) {
    super.add(name.substring(0, this.characterLimit) + '...');
  }
}
