import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageOther } from 'src/app/models/image/image-other';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImageOtherService {
  private documentsURL = environment.documentsURL;
  constructor(private httpClient: HttpClient) {}

  uploadDocumentInOther(
    idOther: number,
    image: FormData
  ): Observable<ImageOther> {
    return this.httpClient.post(
      this.documentsURL + '/others/' + idOther + '/upload',
      image
    );
  }
}
