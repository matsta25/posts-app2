import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../model/post.model';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @Input() post: Post = {
    userId: 0,
    id: 0,
    body: '',
    title: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
