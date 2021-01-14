import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/Comment.model';
import { TokenStorageService } from '../_services/token-storage.service';

const baseUrl = 'http://localhost:8080/api/comments';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  currentComments: Comment[] = [];
  newComment?: Comment;
  commentContent: string = '';
  constructor(
    private tokenStorageService: TokenStorageService,
    private http: HttpClient
  ) {}

  getAll(): Observable<Comment[]> {
    return this.http.get<Comment[]>(baseUrl);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
