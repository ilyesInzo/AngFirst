import { Component, OnInit, Input } from '@angular/core';
import { MyService } from '../services/myservice.service'

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.scss']
})
export class TestCompComponent implements OnInit {

  @Input() name: string;
  @Input() etat: number;
  @Input() index: number;
  @Input() id :number;

  constructor(private myService: MyService) { }

  ngOnInit(): void {
  }

  getStatut() {

    return this.etat;

  }

  getColor() {

    if (this.etat === 0) {

      return 'red';
    }
    else return 'green'

  }

  onSwitch() {
    if (this.etat === 0) {
       this.myService.switchOneOn(this.index); 
      }
    else {
      this.myService.switchOneOff(this.index);
    }
  }

}
