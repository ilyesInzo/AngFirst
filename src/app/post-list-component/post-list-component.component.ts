import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../pojo/Post';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit(): void {
  }


  onLove(post: Post) {
    post.loveIts++;
  }

  onHate(post: Post) {
    post.loveIts--;
  }

  compare() {
    console.log(this.post.loveIts);
    if (this.post.loveIts > 0) return true;
    else if (this.post.loveIts < 0) return false;
  }

}
