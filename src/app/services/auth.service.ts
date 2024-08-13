import { Injectable, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface IAuth {
  token: string;
}

export interface ITodo {
  _id: string;
  title: string;
  description: string;
  category: string;
  date: Date;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  slog = signal(false);

  private myToken = '';
  private url: string = 'http://localhost:5000/api/auth';
  private urlRegister: string = 'http://localhost:5000/api/users';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<IAuth> {
    return this.http
      .post<IAuth>(this.url, {
        email: email,
        password: password,
      })
      .pipe(
        tap((response: any) => {
          this._isLoggedIn$.next(true);
          this.slog.set(true);
          this.myToken = response.token;

          localStorage.setItem('authToken', response.token);
        })
      );
  }

  logout() {
    this._isLoggedIn$.next(false);
    this.slog.set(false);
    this.myToken = '';

    localStorage.removeItem('authToken');
  }

  register(name: string, email: string, password: string): Observable<IAuth> {
    return this.http
      .post<IAuth>(this.urlRegister, {
        name: name,
        email: email,
        password: password,
      })
      .pipe(
        tap((response: any) => {
          this._isLoggedIn$.next(true);
          this.slog.set(true);
          this.myToken = response.token;

          localStorage.setItem('authToken', response.token);
        })
      );
  }

  getTodos() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('authToken')!,
      }),
    };
    return this.http.get<ITodo>('http://localhost:5000/api/todos', httpOptions);
  }
}
