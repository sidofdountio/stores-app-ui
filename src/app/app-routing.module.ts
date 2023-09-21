import { NgModule } from '@angular/core';
import { RouterModule, Routes, TitleStrategy } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page.not.found/page.not.found.component';
import { DetailsComponent } from './details/details.component';
import { TemplatePageTitleStrategy } from 'src/app/template.page.title.strategy';
import { AppComponent } from './app.component';
import { HomeComponent } from './web/home.component';

const routes: Routes = [

  {
    path: 'store',
    component: HomeComponent,
    title: "Store"
  },
  {
    path: 'cart',
    component: CartComponent,
    title: "Cart"
  },
  {
    path: '',
    redirectTo: "/store",pathMatch: 'full' ,
    title: 'home'
  },
  {
    path: '**',
    title: 'Page not found',
    component: PageNotFoundComponent,

  },
  {
    path: 'details/:id',
    title: 'Details',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
  ]
})
export class AppRoutingModule { }
