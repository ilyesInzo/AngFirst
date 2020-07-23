import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyService } from '../services/myservice.service';

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.scss']
})
export class SingleViewComponent implements OnInit {

  name: String;
  etat: number;

  constructor(private myService: MyService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.params['id'];
    this.name = this.myService.getElementByid(+id).name;
    this.etat = this.myService.getElementByid(+id).etat;

  }

}
