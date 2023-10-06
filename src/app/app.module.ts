import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatBadgeModule} from '@angular/material/badge'; 
import {MatButtonModule, MatFabButton} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CustomerComponent } from './customer/customer.component';
import { CartComponent } from './cart/cart.component';
import { CustomPipe } from './custom.pipe';
import { DetailsComponent } from './details/details.component';
import { PageNotFoundComponent } from './page.not.found/page.not.found.component';
import { HomeComponent } from './web/home.component';
import {MatDividerModule} from '@angular/material/divider'; 
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin/admin.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { LayoutModule } from '@angular/cdk/layout';
import { ProductListComponent } from './admin/product/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CartComponent,
    CustomPipe,
    DetailsComponent,
    PageNotFoundComponent,
    HomeComponent,
    AdminComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatListModule,
    MatTooltipModule,
    MatDividerModule,
    MatGridListModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
