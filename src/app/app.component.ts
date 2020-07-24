import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../pojo/post';
import { MyService } from './services/myservice.service';
import { Subscription, interval} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy {
  myName1: String = "Ilyes";
  myName2: String = "Ali";
  myName3: String = "Sami";

  nbSeconde:number;
  counterSubscription:Subscription;

  allPosts = [
    new Post("First Post", "Gibt nie etwas auf an dem du jeden Tag denken musste", 10),
    new Post("Second Post", "Lieber geht durch den Magen", -5),
    new Post("Third Post", "Auf veränderung zu hoffen ohne selbst dafür zu tun ist wie am Bahnhof zu stehen oder auf einem Schiff zu warten", 0)
  ]

  constructor() {
  }

  ngOnInit(): void {
    const value = interval(1000);
   this.counterSubscription = value.subscribe(x => this.nbSeconde = x , error => console.log(error), ()=> console.log("fini"));
  }

  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe();
  }

}
