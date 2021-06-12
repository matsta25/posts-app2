import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../model/post.model';
import {Router} from '@angular/router';

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

  @Input() showButton = true;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public onShowPost(id: number): void {
    this.router.navigate(['/', 'posts', id]);
  }
}
