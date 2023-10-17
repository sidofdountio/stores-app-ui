import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../message/snackbar/snackbar.component';

@Injectable({providedIn: 'root'})
export class SnackbarService {
  private horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  private verticalPosition: MatSnackBarVerticalPosition = 'top';
  private durationInSecond: number = 5;

  constructor(private _snackBar: MatSnackBar) { }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: this.durationInSecond * 1000 });
  }

  openSnackBarCustorm(message: string, action: string) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: this.durationInSecond * 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }
}
