import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.scss']
})
export class TestCompComponent implements OnInit {

  @Input() name: string;
  @Input() etat: number;

  constructor() { }

  ngOnInit(): void {
  }

  getStatut() {

    return this.etat;

  }

  getColor() {

    if (this.etat === 2) {

      return 'red';
    }
    else return 'green'

  }
}
