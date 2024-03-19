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
  }
}
