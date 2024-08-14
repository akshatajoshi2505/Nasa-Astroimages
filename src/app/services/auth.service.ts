import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface IAuth {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  private myToken = '';
  private loginUrl: string = 'http://localhost:5000/api/auth';  // Login URL
  private registerUrl: string = 'http://localhost:5000/api/users';  // Register URL

  constructor(private http: HttpClient) {
    // Check if running in the browser before accessing localStorage
    if (this.isBrowser() && localStorage.getItem('authToken')) {
      this.myToken = localStorage.getItem('authToken')!;
      this._isLoggedIn$.next(true);
    }
  }

  // Method to determine if the code is running in a browser environment
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  login(email: string, password: string): Observable<IAuth> {
    return this.http.post<IAuth>(this.loginUrl, { email, password }).pipe(
      tap((response: IAuth) => {
        this.myToken = response.token;
        this._isLoggedIn$.next(true);
        if (this.isBrowser()) {
          localStorage.setItem('authToken', response.token);
        }
      })
    );
  }

  logout(): void {
    this.myToken = '';
    this._isLoggedIn$.next(false);
    if (this.isBrowser()) {
      localStorage.removeItem('authToken');
    }
  }

  register(name: string, email: string, password: string): Observable<IAuth> {
    return this.http.post<IAuth>(this.registerUrl, { name, email, password }).pipe(
      tap((response: IAuth) => {
        this.myToken = response.token;
        this._isLoggedIn$.next(true);
        if (this.isBrowser()) {
          localStorage.setItem('authToken', response.token);
        }
      })
    );
  }
}
