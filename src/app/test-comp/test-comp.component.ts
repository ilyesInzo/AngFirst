import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.scss']
})
export class TestCompComponent implements OnInit {

  name:string = "My Name";
  etat:string = "My State"

  constructor() { }

  ngOnInit(): void {
  }

  getStatut(){

  return this.etat;

  }
}
