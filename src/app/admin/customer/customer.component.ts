import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';
import { AppState } from 'src/app/model/app-state';
import { CustomResponse } from 'src/app/model/custom-response';
import { DataState } from 'src/app/model/data-state';
import { AppService } from 'src/app/service/app-service.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  user$: Observable<AppState<CustomResponse>> | undefined;
  constructor(private appservice: AppService) { }

  ngOnInit() {
   this.users()
  }

  private users() {
    this.user$ = this.appservice.users$
      .pipe
      (
        map(response => {
          return { dateSate: DataState.LOADED_STATE, appData: response };
        }),
        startWith({ dateSate: DataState.LOADING_STATE }),
        catchError((error: string) => {
          return of({ dateSate: DataState.ERROR_STATE, error });
        })
      );
  }

  private getUsers() {
    this.appservice.getUsers().subscribe(
      ((response) => {
        console.log(response);
      }),
      (error: HttpErrorResponse) => {
        console.log("error" + error.error);
      }

    );
  }

  onUsers(): void {

  }
}
