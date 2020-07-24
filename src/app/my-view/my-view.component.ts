import { Component, OnInit, OnDestroy } from '@angular/core';
import { MyService } from '../services/myservice.service';
import { Authentification } from '../services/auth.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-view',
  templateUrl: './my-view.component.html',
  styleUrls: ['./my-view.component.scss']
})
export class MyViewComponent implements OnInit, OnDestroy {

  elements: any[];
  isAuth: Boolean = false;
  elementSubscription: Subscription;
  lastUpdate = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve(new Date())
    }, 4000);

  })

  constructor(private myService: MyService, private auth: Authentification) {
    this.isAuth = this.auth.isAuth;
  }

  ngOnInit(): void {
    // subscribe to element change
    this.elementSubscription = this.myService.elementsSubject.subscribe((elements: any[]) => {
      this.elements = elements;
    });
    // rise notification so we can get the elements at the start
    this.myService.notifyElementChanges();
  }

  onAllumer() {
    this.myService.onTurnOnAll();
  }

  onEteindre() {
    if (confirm("Etes vous sure de vouloir tout eteindre ?")) { this.myService.onTurnOffAll() }
    else return null;
  }

  ngOnDestroy(): void {
    this.elementSubscription.unsubscribe();
  }

}
