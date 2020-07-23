import { Component, OnInit } from '@angular/core';
import { Authentification } from '../services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isAuth: Boolean = false;

  constructor(private auth: Authentification, private router: Router) { }

  ngOnInit(): void {
    this.isAuth = this.auth.isAuth;
  }

  onSignIn() {
    this.auth.sighIn().then(() => {
      this.isAuth = this.auth.isAuth;
      this.router.navigate(['myList']);
    })
  }

  onSignOut() {
    this.auth.signOut();
    this.isAuth = this.auth.isAuth;
  }

}
