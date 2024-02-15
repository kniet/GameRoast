import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comment} from "../models/comment";

const COMMENT_API = 'http://localhost:8080/api/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {
  }

  createComment(comment: Comment){
    const headers = new HttpHeaders().set('Content-Type','application/json');


    return this.http.post<Comment>(COMMENT_API + '/create_comment',
      comment);
  }

  deleteComment(commentId: number): Observable<any> {
    return this.http.delete<any>(COMMENT_API + `/delete_comment/${commentId}`);
  }

  getAllComments(gameId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(COMMENT_API + `/comments/${gameId}`);
  }
}
