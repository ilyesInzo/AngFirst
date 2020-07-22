import { Component, Input } from '@angular/core';
import {Post} from '../pojo/post';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myName1: String = "Ilyes";
  myName2: String = "Ali";
  myName3: String = "Sami";

  lastUpdate = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve(new Date())
    }, 4000);

  })

  elements = [
    { name: "Ilyes", etat: 1 },
    { name: "Ali", etat: 2 },
    { name: "Sami", etat: 3 }
  ]

 allPosts = [
    new Post("First Post","Gibt nie etwas auf an dem du jeden Tag denken musste", 10),
    new Post("Second Post", "Lieber geht durch den Magen", -5),
    new Post("Third Post", "Auf veränderung zu hoffen ohne selbst dafür zu tun ist wie am Bahnhof zu stehen oder auf einem Schiff zu warten", 0)
  ]

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
