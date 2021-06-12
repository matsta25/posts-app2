import {Injectable} from '@angular/core';
import {Post} from '../model/post.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: Post[] = [
    {
      userId: 123,
      id: 1,
      title: 'Lorem ipsum1',
      body: 'Lorem ispum exun non1'
    },
    {
      userId: 124,
      id: 2,
      title: 'Lorem ipsum2',
      body: 'Lorem ispum exun non2'
    },
    {
      userId: 125,
      id: 3,
      title: 'Lorem ipsum3',
      body: 'Lorem ispum exun non3'
    }
  ];

  constructor(
    private http: HttpClient
  ) {
  }

  public fetchPosts(): Post[] {
    return this.posts;
  }

  public readPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
