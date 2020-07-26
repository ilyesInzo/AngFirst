import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyService } from '../services/myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-view',
  templateUrl: './edit-view.component.html',
  styleUrls: ['./edit-view.component.scss']
})
export class EditViewComponent implements OnInit {

  defaultEtat:number = 0;

  constructor(private myService:MyService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    const name = form.value['name'];
    const etat = +form.value['etat'];
    this.myService.addElement(name, etat);
    this.router.navigate(['/myList']);
  }

}
