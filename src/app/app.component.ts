import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Charles';

  add() {
    console.log(`Adicionando ${this.name}...`)

    const number = Math.round(Math.random() * 100);

    this.name = `João ${number}`;
  }

  changeName(event: any) {
    console.log(event);

    this.name = (event.target.value);
  }
}
