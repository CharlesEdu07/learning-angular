import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lastId = 0;
  name = 'Charles';
  added = false;
  employees = [];

  add() {
    console.log(`Adicionando ${this.name}...`);

    this.added = true;

    this.employees.push({
      id: ++this.lastId,
      name: this.name,
    });
  }
}
