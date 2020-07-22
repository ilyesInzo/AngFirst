import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.scss']
})
export class PostComponentComponent implements OnInit {

  @Input() posts;

  constructor() { }

  ngOnInit(): void {
  }

}
