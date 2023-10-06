import { Injectable } from '@angular/core';
import { Authentication } from './model/authentication';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  constructor() { }
  isAuthenticated():boolean {
    setTimeout(()=>{
      this.isLoggedIn = true;
    },100)
    return this.isLoggedIn ;
  }

  login() {
    this.isLoggedIn = true;
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
