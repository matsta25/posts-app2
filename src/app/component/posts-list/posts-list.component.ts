import { Component, OnInit } from '@angular/core';
import {Post} from '../../model/post.model';
import {PostsService} from '../../service/posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  public posts: Post[] = [];

  constructor(
    private postService: PostsService
  ) {
    postService.readPosts().subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
  }

  ngOnInit(): void {
  }

}
