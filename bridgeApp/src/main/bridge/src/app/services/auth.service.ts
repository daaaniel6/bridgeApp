import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtDTO } from '../models/jwt-dto';
import { LoginUser } from '../models/login-user';
import { NewUser } from '../models/new-user';
import { User } from '../models/user/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authURL = environment.authURL;

  constructor(private httpClient: HttpClient) {}

  public newUser(newUser: NewUser): Observable<any> {
    const requestOptions: Object = {
      /* other options here */
      responseType: 'text',
    };
    return this.httpClient.post<any>(
      this.authURL + 'newUser',
      newUser,
      requestOptions
    );
  }

  public login(loginUser: LoginUser): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + 'login', loginUser);
  }

  public refrsh(dto: JwtDTO): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + 'refresh', dto);
  }

  public getUserByUsername(username: String): Observable<User> {
    return this.httpClient.get<User>(this.authURL + 'users/' + username);
  }
}
