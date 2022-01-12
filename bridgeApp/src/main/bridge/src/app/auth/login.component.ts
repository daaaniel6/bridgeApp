import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from '../models/login-user';
import { NewUser } from '../models/new-user';
import { AuthService } from '../services/auth.service';
import { LoadScriptsService } from '../services/load-scripts.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLoginFail = false;
  loginUser: LoginUser = new LoginUser('', '');
  username: string = '';
  password: string = '';
  roles: string[] = [];
  errorMessage: string = '';

  //Register
  newUser: NewUser = new NewUser('', '', '', '');
  name: string = '';
  usernameRegister: string = '';
  passwordRegister: string = '';
  email: string = '';
  // errorMessage: string = '';
  // isLogged = false;

  constructor(
    private loadScriptsService: LoadScriptsService,
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) {
    this.loadScriptsService.load(['login/login']);
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
    // if (this.tokenService.getToken()) {
    //   this.isLogged = true;
    // }
  }
  onLogin(): void {
    this.loginUser = new LoginUser(this.username, this.password);
    this.authService.login(this.loginUser).subscribe(
      (data) => {
        this.isLogged = true;
        this.isLoginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.username);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['/dashboard']);
      },
      (err) => {
        this.isLogged = false;
        this.isLoginFail = true;
        this.errorMessage = err.error.message;
        console.log(err);
      }
    );
  }

  onRegister(): void {
    this.newUser = new NewUser(
      this.name,
      this.usernameRegister,
      this.email,
      this.passwordRegister
    );
    this.authService.newUser(this.newUser).subscribe(
      (data) => {
        //console.log('cuenta creada correctamente');
        this.router.navigate(['/login']);
        this.cleanInputs();
        console.log(data);
      },
      (err) => {
        this.errorMessage = err.error.message;
        console.log(err);
        console.log('error al crear la cuenta');
      }
    );
  }

  cleanInputs(): void {
    this.name = '';
    this.usernameRegister = '';
    this.passwordRegister = '';
    this.email = '';
    this.username = '';
    this.password = '';
  }
}
