import { Component, OnInit } from '@angular/core';
import { MyService } from '../services/myservice.service';
import { Authentification } from '../services/auth.service'

@Component({
  selector: 'app-my-view',
  templateUrl: './my-view.component.html',
  styleUrls: ['./my-view.component.scss']
})
export class MyViewComponent implements OnInit {

  elements: any[];
  isAuth: Boolean = false;
  lastUpdate = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve(new Date())
    }, 4000);

  })

  constructor(private myService:MyService, private auth:Authentification) {
      this.isAuth = this.auth.isAuth;
  }

  ngOnInit(): void {
    this.elements = this.myService.elements;
  }

  onAllumer() {
    this.myService.onTurnOnAll();
  }

  onEteindre() {
    if (confirm("Etes vous sure de vouloir tout eteindre ?")) { this.myService.onTurnOffAll() }
    else return null;
  }

}
