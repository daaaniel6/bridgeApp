import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image/image';

import { DomSanitizer } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent implements OnInit {
  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}

  image!: File;
  imageMin!: File;

  selectedFile!: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string = '';
  imageName: any;

  //Gets called when the user selects an image
  public onFileChanged(event: any): void {
    //Select File
    this.selectedFile = event.target.files[0];
    this.image = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (evento: any) => {
      this.imageMin = evento.target.result;
    };
    fileReader.readAsDataURL(this.image);
  }

  uploadedFiles: any[] = [];

  onUpload(event: any): void {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
      console.log(file);
      const uploadImageData = new FormData();
      uploadImageData.append('imageFile', file, file.name);

      this.httpClient
        .post('http://localhost:8080/api/images/upload', uploadImageData, {
          observe: 'response',
        })
        .subscribe((response) => {
          if (response.status === 200) {
            this.message = 'Image uploaded successfully';
          } else {
            this.message = 'Image not uploaded successfully';
          }
        });
    }

    this.messageService.add({
      severity: 'info',
      summary: 'File Uploaded',
      detail: '',
    });
  }

  //Gets called when the user clicks on submit to upload the image
  // onUpload() {
  //   console.log(this.selectedFile);

  //   //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
  //   const uploadImageData = new FormData();
  //   uploadImageData.append(
  //     'imageFile',
  //     this.selectedFile,
  //     this.selectedFile.name
  //   );

  //   //Make a call to the Spring Boot Application to save the image
  //   this.httpClient
  //     .post('http://localhost:8080/api/images/upload', uploadImageData, {
  //       observe: 'response',
  //     })
  //     .subscribe((response) => {
  //       if (response.status === 200) {
  //         this.message = 'Image uploaded successfully';
  //       } else {
  //         this.message = 'Image not uploaded successfully';
  //       }
  //     });
  // }

  imagen: any;
  //Gets called when the user clicks on retieve image button to get the image from back end
  getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient
      .get<Image>('http://localhost:8080/api/images/get/' + this.imageName)
      .subscribe((res) => {
        let objectURL = 'data:image/png;base64,' + res.image;
        this.imagen = this.sanitizer.bypassSecurityTrustUrl(objectURL);

        console.log('get image', res.image);
        this.retrieveResonse = res.image;
        this.base64Data = this.retrieveResonse.picByte;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
      });
  }
}
