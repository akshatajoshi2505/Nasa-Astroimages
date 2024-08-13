// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { FooterComponent } from './components/footer/footer.component';
// import { NavigationComponent } from './components/navigation/navigation.component';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { LoginComponent } from "./components/auth/login/login.component";
// import { RegistrationComponent } from "./components/auth/registration/registration.component";

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [
//     RouterOutlet,
//     FooterComponent,
//     NavigationComponent,
//     FormsModule,
//     CommonModule,
//     LoginComponent,
//     RegistrationComponent
// ],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'my-app';
//   loggedInUser: string | null = null;

//   onRegister() {
//     console.log('User registered successfully');
//   }

//   onLogin(userName: string) {
//     this.loggedInUser = userName;
//   }
// }
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-app1';
}
