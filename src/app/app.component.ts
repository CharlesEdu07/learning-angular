import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Charles';
  added = false;

  add() {
    this.added = true;

    console.log(`Adicionando ${this.name}...`);
  }
}
