import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Authentication } from '../model/authentication';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string = "";
  authentication!: Authentication
  form = this.fb.group({
    email: this.fb.nonNullable.control("",{
      validators: [Validators.required,Validators.email],
    }),
    password: ['',[Validators.required,Validators.maxLength(8)]]
  });
  constructor(public authService: AuthService, private router: Router, private fb: FormBuilder) {
    this.message = this.getMessage();
  }

  ngOnInit(): void {
  }

  getMessage() {
    return 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }
  onLogIn() {
    this.message = 'Trying to log in ...';
    this.authService.login();
    this.message = this.getMessage();

    this.authentication.email = this.form.value.email;
    this.authentication.password = this.form.value.password;

    this.router.navigate(['/admin'])
  }
  onLogout() {
    this.authService.logout();
    this.message = this.getMessage();
  }


}
