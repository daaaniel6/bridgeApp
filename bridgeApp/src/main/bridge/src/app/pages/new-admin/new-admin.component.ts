import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUser } from 'src/app/models/new-user';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/notifications/toast.service';

@Component({
  selector: 'app-new-admin',
  templateUrl: './new-admin.component.html',
  styleUrls: ['./new-admin.component.scss'],
})
export class NewAdminComponent implements OnInit {
  public form: FormGroup = this.formBuilder.group({});

  newUser: NewUser = new NewUser('', '', '', '');

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSave() {}

  onRegister(): void {
    this.newUser = new NewUser(
      this.form.value.name,
      this.form.value.username,
      this.form.value.email,
      this.form.value.password,
      ['admin']
    );
    this.authService.newUser(this.newUser).subscribe(
      (data) => {
        this.cleanInputs();
        this.toastService.showSuccess(
          'Cuenta creada',
          'Ya puedes iniciar sesión'
        );
      },
      (err) => {
        this.toastService.showError('Error', err.error);
      }
    );
  }

  cleanInputs(): void {
    this.form.reset();
  }
}
