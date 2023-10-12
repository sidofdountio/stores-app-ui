import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationRequest } from '../model/authentication-request';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string = "";
  form = this.fb.group({
    email: this.fb.nonNullable.control("", {
      validators: [Validators.required, Validators.email],
    }),
    password: ['', [Validators.required, Validators.minLength(8)]]
  });
  constructor(public authService: AuthService, private router: Router, private fb: FormBuilder) {

  }

  ngOnInit(): void {
    console.log("Login component");
  }

  onLogIn(): void {
    this.authService.login$(this.form.value as AuthenticationRequest)
      .pipe(
        map((response) => {
          this.router.navigate(['/admin'])
        }),
        catchError((error:string)=>{
          this.authService.openSnackBarCustorm("username or password not found", "Close")
          return of({})
        })
      )
  }
  onLogout() {
    this.authService.logout();
  }


}
