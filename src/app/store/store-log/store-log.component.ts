import { Component, OnDestroy } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription, of } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthenticationRequest } from 'src/app/auth/model/authentication-request';


@Component({
  selector: 'app-store-log',
  templateUrl: './store-log.component.html',
  styleUrls: ['./store-log.component.css']
})
export class StoreLogComponent implements OnDestroy {
  loginResponse!: Subscription;

  form = this.fb.group({
    email: this.fb.nonNullable.control("", {
      validators: [Validators.required, Validators.email],
    }),
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  constructor(public authService: AuthService, private router: Router, private fb: FormBuilder) { }

  onLogIn() {
    this.loginResponse = this.authService.login$(this.form.value as AuthenticationRequest)
      .subscribe(
        () => {
          this.router.navigate(['/admin']);
        },
        () => {
          this.authService.openSnackBarCustorm("username or password not found", "Close")
        });
  }

  ngOnDestroy(): void {
    if (this.loginResponse) {
      this.loginResponse.unsubscribe();
    }
  }
}
