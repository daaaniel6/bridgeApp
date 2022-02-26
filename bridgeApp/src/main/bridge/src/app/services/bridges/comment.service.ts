import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/models/bridge/comment/comment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private commentsURL = environment.commentsURL;
  constructor(private httpClient: HttpClient) {}

  sendComment(idBridge: number, comment: Comment) {
    return this.httpClient.post(
      this.commentsURL + '/bridges/' + idBridge + '/send',
      comment
    );
  }
}
