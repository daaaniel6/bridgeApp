import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginUser } from '../models/login-user';
import { NewUser } from '../models/new-user';
import { AuthService } from '../services/auth.service';
import { LoadScriptsService } from '../services/load-scripts.service';
import { ToastService } from '../services/notifications/toast.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginUser: LoginUser = new LoginUser('', '');
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  //Register
  newUser: NewUser = new NewUser('', '', '', '');
  name: string = '';
  usernameRegister: string = '';
  passwordRegister: string = '';
  email: string = '';

  public formRegister: FormGroup = this.formBuilder.group({});

  constructor(
    private loadScriptsService: LoadScriptsService,
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private toastService: ToastService,
    private formBuilder: FormBuilder
  ) {
    this.loadScriptsService.load(['login/login']);
  }

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      name: [''],
      username: [''],
      email: [''],
      password: [''],
    });
  }
  onLogin(): void {
    this.loginUser = new LoginUser(this.username, this.password);
    this.authService.login(this.loginUser).subscribe(
      (data) => {
        this.tokenService.setToken(data.token);

        this.toastService.showSuccess(
          'Login correcto',
          'Bienvenido' + this.username
        );
        window.location.reload();
        this.router.navigate(['/dashboard']);
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.toastService.showError('Error', this.errorMessage);
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
        this.router.navigate(['/login']);
        this.cleanInputs();
        this.toastService.showSuccess(
          'Informacion',
          'Cuenta creada correctamente'
        );
      },
      (err) => {
        this.errorMessage = err.error;
        this.toastService.showError('Error', this.errorMessage);
        console.log(err);
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
