import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/notifications/toast.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLogged = false;

  constructor(
    private tokenService: TokenService,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.isLogged = this.tokenService.isLogged();
  }

  onLogOut(): void {
    this.tokenService.logOut();
  }

  clickContact(): void {
    this.toastService.showWarn(
      'Aun no disponible:',
      'Contacta con el administrador'
    );
  }
}
