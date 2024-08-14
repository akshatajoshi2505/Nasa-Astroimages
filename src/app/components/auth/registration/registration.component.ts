import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {

  // Initialize the form group
  registrationForm = new FormGroup({
    name: new FormControl<string | null>(null, Validators.required),
    email: new FormControl<string | null>('', [
      Validators.required,
      Validators.minLength(3),
      Validators.email,
    ]),
    password: new FormControl<string | null>(null, Validators.required),
  });

  // Error message placeholder
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  // Method to handle form submission
  onSubmit() {
    if (this.registrationForm.valid) {
      this.authService
        .register(
          this.registrationForm.value.name!,
          this.registrationForm.value.email!,
          this.registrationForm.value.password!
        )
        .subscribe({
          next: () => {
            this.router.navigateByUrl('/login'); // Redirect to login page after successful registration
          },
          error: (e) => {
            this.errorMessage = e.error.errors ? e.error.errors[0].msg : 'Registration failed';
          }
        });
    } else {
      this.errorMessage = 'Please fill out the form correctly';
    }
  }
}
