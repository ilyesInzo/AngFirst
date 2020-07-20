import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang-test';
  isAuth: Boolean = false;

  constructor() {

    setTimeout(() => {
      this.isAuth = true;
    }, 4000);

  }

  allumer() {
    console.log("hello hello");
  }
}
