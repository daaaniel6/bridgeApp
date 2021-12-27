import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Output() access = new EventEmitter<boolean>();

  constructor(private loginService: LoginService, private route: Router) {}

  ngOnInit(): void {}

  redirectToPage(page: string) {
    this.route.navigate([page]);
  }

  login() {
    this.loginService.access = true;
    this.redirectToPage('/dashboard');
  }
}
