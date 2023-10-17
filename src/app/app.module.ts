import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRouteComponent, AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CustomPipe } from './custom.pipe';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { LayoutModule } from '@angular/cdk/layout';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DialogMessageComponent } from './message/dialog-message/dialog-message.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SnackbarComponent } from './message/snackbar/snackbar.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { StoreLogComponent } from './store/store-log/store-log.component';
import { GetStartComponent } from './get-start/get-start.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipe,
    AppRouteComponent,
    DialogMessageComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatListModule,
    MatTooltipModule,
    MatDividerModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    LayoutModule,
    AuthModule,
    AdminModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
