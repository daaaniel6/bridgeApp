import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ChangePasswordDTO } from '../models/change-password-dto';
import { EmailValuesDTO } from '../models/email-values-dto';

@Injectable({
  providedIn: 'root',
})
export class EmailPasswordService {
  changePasswordURL = environment.changePasswordURL;

  constructor(private httpClient: HttpClient) {}

  public sendEmail(dto: EmailValuesDTO): Observable<any> {
    const requestOptions: Object = { responseType: 'text' };
    return this.httpClient.post<any>(
      this.changePasswordURL + 'send-email',
      dto,
      requestOptions
    );
  }

  public changePassword(dto: ChangePasswordDTO): Observable<any> {
    const requestOptions: Object = { responseType: 'text' };
    return this.httpClient.post<any>(
      this.changePasswordURL + 'change-password',
      dto,
      requestOptions
    );
  }
}
