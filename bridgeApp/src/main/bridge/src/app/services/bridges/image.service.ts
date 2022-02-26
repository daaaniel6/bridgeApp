import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from 'src/app/models/image/image';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private imagesURL = environment.imagesURL;
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Image[]> {
    return this.httpClient.get<Image[]>(this.imagesURL);
  }

  getImagesByBridge(idBridge: number): Observable<Image[]> {
    return this.httpClient.get<Image[]>(this.imagesURL + '/bridge/' + idBridge);
  }

  uploadImageInBridge(idBridge: number, image: FormData): Observable<Image> {
    return this.httpClient.post(
      this.imagesURL + '/bridge/' + idBridge + '/upload',
      image
    );
  }

  delete(id: number) {
    return this.httpClient.delete(this.imagesURL + '/' + id);
  }
}
