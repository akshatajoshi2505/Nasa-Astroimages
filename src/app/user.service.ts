import { Injectable } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [];

  register(user: User) {
    this.users.push(user);
  }

  login(email: string, password: string): User | null {
    return this.users.find(user => user.email === email && user.password === password) || null;
  }
}
