import { Byte } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { Image } from 'src/app/models/image/image';
import { ImageService } from 'src/app/services/bridges/image.service';
import { BridgeComunicationService } from 'src/app/services/comunication/bridge-comunication.service';
import { LoadScriptsService } from 'src/app/services/load-scripts.service';
import { ToastService } from 'src/app/services/notifications/toast.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  imageDialog: boolean = false;
  myfiles: any = [];
  imagesList: Image[] = [];

  constructor(
    private bridgeComunicationService: BridgeComunicationService,
    private loadScriptsService: LoadScriptsService,
    private imageService: ImageService,
    private sanitizer: DomSanitizer,
    private toastService: ToastService
  ) {
    //this.loadScriptsService.load(['gallery/gallery']);
    // this.loadScriptsService.loadPath([
    //   'plugins/datatables-responsive/js/responsive.bootstrap4',
    //   'plugins/ekko-lightbox/ekko-lightbox',
    //   'plugins/summernote/summernote-bs4',
    //   'plugins/summernote/summernote',
    // ]);
  }

  ngOnInit(): void {
    this.getAllImages();
  }

  onDelete(image: Image): void {
    //this.toastService.showConfirm();
    this.imageService.delete(image.imageId || 0).subscribe((data) => {
      this.imagesList = this.imagesList.filter((item) => item !== image);
      this.toastService.showWarn(
        'Imagen eliminada correctamente',
        image.name || ''
      );
    });
  }

  onReject() {
    this.toastService.showInfo('Cancelado', '');
  }

  onConfirm() {
    this.toastService.showInfo('Imagen eliminada correctamente', '');
  }

  onUpload(event: any) {
    for (let file of event.files) {
      const uploadImageData = new FormData();
      uploadImageData.append('imageFile', file, file.name);
      this.imageService
        .uploadImageInBridge(
          this.bridgeComunicationService.getBridge().bridgeId || 0,
          uploadImageData
        )
        .subscribe(async (response) => {
          this.toastService.showSuccess(
            'Imagen subida correctamente',
            file.name
          );
          this.imagesList.push(response);
        });
    }
    this.myfiles = [];
  }

  getAllImages() {
    this.imagesList.length = 0;
    this.imageService
      .getImagesByBridge(
        this.bridgeComunicationService.getBridge().bridgeId || 0
      )
      .subscribe((data) => {
        this.imagesList = data;
      });
  }

  convertToImage(img: Image): SafeUrl {
    let objectURL = 'data:image/png;base64,' + img.image;
    let safeUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    return safeUrl;
  }
}
