import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PostsService} from '../../service/posts.service';
import {Post} from '../../model/post.model';

@Component({
  selector: 'app-post-show',
  templateUrl: './post-show.component.html',
  styleUrls: ['./post-show.component.css']
})
export class PostShowComponent implements OnInit {

  public post: Post = {
    userId: 0,
    id: 0,
    title: '',
    body: ''
  };

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id') || '0';

    this.postsService.readPost(postId).subscribe(
      (post: Post) => {
        this.post = post;
      }
    );
  }

  public onGoBack(): void {
    this.router.navigate(['/', 'posts']);
  }
}
