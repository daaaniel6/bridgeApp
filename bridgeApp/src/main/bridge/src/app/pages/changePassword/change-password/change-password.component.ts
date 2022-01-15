import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangePasswordDTO } from 'src/app/models/change-password-dto';
import { EmailPasswordService } from 'src/app/services/email-password.service';
import { ToastService } from 'src/app/services/notifications/toast.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  password: string = '';
  confirmPassword: string = '';
  tokenPassword: string = '';

  dto: ChangePasswordDTO = new ChangePasswordDTO('', '', '');

  constructor(
    private emailPasswordService: EmailPasswordService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {}

  onChangePassword(): void {
    if (this.password !== this.confirmPassword) {
      console.log('Passwords do not match');
      return;
    }
    this.tokenPassword = this.activatedRoute.snapshot.params.tokenPassword;
    this.dto = new ChangePasswordDTO(
      this.password,
      this.confirmPassword,
      this.tokenPassword
    );
    this.emailPasswordService.changePassword(this.dto).subscribe(
      (data) => {
        this.router.navigate(['/login']);
        this.toastService.showInfo(
          'Informacion',
          'Contraseña cambiada correctamente'
        );
      },
      (err) => {
        console.log(err);
        this.toastService.showError('Error', err.error.message);
      }
    );
  }
}
