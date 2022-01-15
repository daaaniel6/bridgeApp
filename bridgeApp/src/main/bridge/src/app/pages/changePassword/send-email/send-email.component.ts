import { Component, OnInit } from '@angular/core';
import { EmailValuesDTO } from 'src/app/models/email-values-dto';
import { EmailPasswordService } from 'src/app/services/email-password.service';
import { LoadScriptsService } from 'src/app/services/load-scripts.service';
import { ToastService } from 'src/app/services/notifications/toast.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss'],
})
export class SendEmailComponent implements OnInit {
  username: string = '';
  dto: EmailValuesDTO = new EmailValuesDTO('');

  constructor(
    private emailPasswordService: EmailPasswordService,
    private loadScriptsService: LoadScriptsService,
    private toastService: ToastService
  ) {
    this.loadScriptsService.load(['login/login']);
  }

  ngOnInit(): void {}

  onSendEmail(): void {
    this.dto = new EmailValuesDTO(this.username);
    this.emailPasswordService.sendEmail(this.dto).subscribe(
      (data) => {
        console.log(data);
        this.toastService.showSuccess(
          'Email enviado',
          'Revisa tu correo para cambiar la contraseña'
        );
      },
      (err) => {
        console.log(err);
        this.toastService.showError('Error', err.error.message);
      }
    );
  }
}
