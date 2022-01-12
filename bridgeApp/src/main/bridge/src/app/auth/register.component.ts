import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from '../models/login-user';
import { NewUser } from '../models/new-user';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  newUser: NewUser = new NewUser('', '', '', '');
  name: string = '';
  username: string = '';
  password: string = '';
  email: string = '';
  errorMessage: string = '';
  isLogged = false;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }

  onRegister(): void {
    this.newUser = new NewUser(
      this.name,
      this.username,
      this.email,
      this.password
    );
    this.authService.newUser(this.newUser).subscribe(
      (data) => {
        console.log('cuenta creada correctamente');
        this.router.navigate(['/log']);
      },
      (err) => {
        this.errorMessage = err.error.message;
        console.log(err);
      }
    );
  }

  cleanInputs(): void {
    this.name = '';
    this.username = '';
    this.password = '';
    this.email = '';
  }
}
