import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Bridge } from 'src/app/models/bridge/bridge';
import { Comment } from 'src/app/models/bridge/comment/comment';
import { Image } from 'src/app/models/image/image';
import { User } from 'src/app/models/user/user';
import { AuthService } from 'src/app/services/auth.service';
import { CommentService } from 'src/app/services/bridges/comment.service';
import { ImageService } from 'src/app/services/bridges/image.service';
import { BridgeComunicationService } from 'src/app/services/comunication/bridge-comunication.service';
import { LoadScriptsService } from 'src/app/services/load-scripts.service';
import { ToastService } from 'src/app/services/notifications/toast.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss'],
})
export class ForumComponent implements OnInit {
  //myfiles: any = [];
  bridge: Bridge = {};
  imagesList: Image[] = [];
  commentsList: Comment[] = [];
  imageSelectSafeUrl: SafeUrl = '';
  user: User = {};
  textComment: string = '';

  constructor(
    private bridgeComunicationService: BridgeComunicationService,
    private loadScriptsService: LoadScriptsService,
    private imageService: ImageService,
    private toastService: ToastService,
    private sanitizer: DomSanitizer,
    private authService: AuthService,
    private tokenService: TokenService,
    private commentService: CommentService
  ) {
    this.loadScriptsService.load(['forum/forum']);
  }

  ngOnInit(): void {
    this.bridge = this.bridgeComunicationService.getBridge();
    this.getAllImages();
    this.commentsList = this.bridge.commentList || [];
    this.getUserByUsername(this.tokenService.getUserName());
  }

  clickImage(image: Image) {
    this.imageSelectSafeUrl = this.convertToImage(image);
  }

  getAllImages() {
    this.imagesList.length = 0;
    this.imageService
      .getImagesByBridge(
        this.bridgeComunicationService.getBridge().bridgeId || 0
      )
      .subscribe((data) => {
        this.imagesList = data;
        this.imageSelectSafeUrl = this.convertToImage(this.imagesList[0]);
      });
  }

  convertToImage(img: Image): SafeUrl {
    let safeUrl = '';
    if (img !== undefined) {
      let objectURL = 'data:image/png;base64,' + img.image;
      let safeUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      return safeUrl;
    }
    return safeUrl;
  }

  getUserByUsername(username: String): void {
    this.authService.getUserByUsername(username).subscribe((data) => {
      this.user = data;
    });
  }

  addComment() {
    let comment: Comment = {
      comment: this.textComment,
      user: this.user,
      date: new Date(),
    };
    this.commentService
      .sendComment(this.bridge.bridgeId || 0, comment)
      .subscribe((data) => {
        this.commentsList.push(data);
        this.textComment = '';
      });

    this.commentsList.push(comment);
    this.bridge.commentList = this.commentsList;
    this.bridgeComunicationService.setBridge(this.bridge);
    this.toastService.showSuccess(
      'Comentario agregado',
      'El comentario se envio con exito'
    );
  }
}
