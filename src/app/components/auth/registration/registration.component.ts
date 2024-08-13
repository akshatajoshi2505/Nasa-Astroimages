

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { AuthService, IAuth } from '../../../services/auth.service';
import { Router } from '@angular/router';
type RegisterType = {
  id: number;
  name: string;
  email: string;
  password: string;
};
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent {

  authToken: IAuth = { token: '' };
  errorMessage: string = '';
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {}

  //if more than one validators use array
  registrationForm = new FormGroup({
    name: new FormControl<string | null>(null, Validators.required),
    email: new FormControl<string | null>('', [
      Validators.required,
      Validators.minLength(3),
      Validators.email,
    ]),
    password: new FormControl<string | null>(null, Validators.required),
  });
  onSubmit() {
    this.authService
      .register(
        this.registrationForm.value.name!,
        this.registrationForm.value.email!,
        this.registrationForm.value.password!
      )
      .subscribe({
        next: (token) => {
          console.log(token);
          // this.authToken = token;
          //localStorage.setItem('authtoken', token.token);
          this.router.navigateByUrl('/grocery');
        },
        error: (e) => {
          console.log(e.error.errors);
          this.errorMessage = e.error.errors[0].msg;
        },
        complete: () => {
          console.info('complete');
        },
      });
  }
}
