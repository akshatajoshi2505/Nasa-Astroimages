import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/auth/login/login.component';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { PostComponent } from './components/post/post.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AstronomicalSearchComponent } from './components/astronomical-search/astronomical-search.component'; // Import the new component


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegistrationComponent,
  },
  { path: 'logout', component: LogoutComponent },
  { path: 'earth-images', component: PostComponent },
  { path: 'astronomical-search', component: AstronomicalSearchComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
