import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Bridge } from 'src/app/models/bridge/bridge';
import { Comment } from 'src/app/models/bridge/comment/comment';
import { Image } from 'src/app/models/image/image';
import { ImageOther } from 'src/app/models/image/image-other';
import { User } from 'src/app/models/user/user';
import { AuthService } from 'src/app/services/auth.service';
import { CommentService } from 'src/app/services/bridges/comment.service';
import { ImageService } from 'src/app/services/bridges/image.service';
import { BridgeComunicationService } from 'src/app/services/comunication/bridge-comunication.service';
import { LoadScriptsService } from 'src/app/services/load-scripts.service';
import { ToastService } from 'src/app/services/notifications/toast.service';
import { TokenService } from 'src/app/services/token.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { HostListener } from '@angular/core';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss'],
})
export class ForumComponent implements OnInit {
  //myfiles: any = [];
  bridge: Bridge = {};
  imagesList: Image[] = [];
  documentList: SafeUrl[] = [];
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
    private commentService: CommentService,
    private router: Router
  ) {
    this.loadScriptsService.load(['forum/forum']);
    // router.events.subscribe((event: any) => {
    //   if (event.navigationTrigger === 'popstate') {
    //     router.navigate(['/all-registrations']);
    //   }
    // });
  }

  ngOnInit(): void {
    this.bridge = this.bridgeComunicationService.getBridge();
    this.getAllImages();
    this.commentsList = this.bridge.commentList || [];
    this.getUserByUsername(this.tokenService.getUserName());
    // this.documentList =
    //   this.bridgeComunicationService.getBridge().otherOtherId?.imageOtherList ||
    //   [];
    for (let document of this.bridgeComunicationService.getBridge().otherOtherId
      ?.imageOtherList || []) {
      this.documentList.push(this.convertToDocument(document));
    }
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
    //console.log(img);
    let safeUrl = '';
    if (img !== undefined) {
      if (!img.name!.includes('pdf')) {
        let objectURL = 'data:image/png;base64,' + img.image;
        let safeUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        return safeUrl;
      }
    }
    return safeUrl;
  }

  convertToDocument(img: Image): SafeUrl {
    let safeUrl = '';
    if (img !== undefined) {
      if (img.name!.includes('pdf')) {
        let pdfHref = this.sanitizer.bypassSecurityTrustResourceUrl(
          'data:application/pdf;base64,' + img.image
        );
        return pdfHref;
      }
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
        //this.commentsList.push(comment);
        this.commentsList.push(data);
        this.textComment = '';
        this.bridge.commentList = this.commentsList;
        this.bridgeComunicationService.setBridge(this.bridge);
        this.toastService.showSuccess(
          'Comentario agregado',
          'El comentario se envio con exito'
        );
      });
  }
}
