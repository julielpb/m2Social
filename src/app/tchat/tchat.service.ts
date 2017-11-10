import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Post} from './Post';
import 'rxjs/add/operator/retry';
import {User} from './User';

@Injectable()
export class TchatService {

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('api/posts').retry(3);
  }

  getIdPost(id: number) {
    return this.http.get<Post>(`api/posts/${id}`).retry(3);
  }

  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(`api/posts/${post.id}`, post).retry(3);
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`api/posts/`, post).retry(3);
  }

  deletePost(post: Post) {
    return this.http.delete(`api/posts/${post.id}`, post).retry(3);
  }

  getIdUser(id: number) {
    return this.http.get<User>(`api/users/${id}`).retry(3);
  }
}
