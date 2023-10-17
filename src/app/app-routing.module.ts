import { NgModule } from '@angular/core';
import { RouterModule, Routes, TitleStrategy } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page.not.found/page.not.found.component';
import { DetailsComponent } from './details/details.component';
import { TemplatePageTitleStrategy } from 'src/app/template.page.title.strategy';
import { HomeComponent } from './web/home.component';
import { StoreComponent } from './store/store.component';
import { StoreLogComponent } from './store/store-log/store-log.component';
import { GetStartComponent } from './get-start/get-start.component';

const routes: Routes = [
  {
    path: '',
    component: GetStartComponent
  },
  {
    path: 'get-start',
    component: GetStartComponent,
    title: 'Get-start'
  },
  {
    path: 'web',
    component: HomeComponent,
    title: "web"
  },
  {
    path: 'cart',
    component: CartComponent,
    title: "Cart"
  },
  {
    path: 'details/:id',
    title: 'Details',
    component: DetailsComponent
  },

  {
    path: 'store',
    component: StoreComponent,
    title: 'create-store'
  },
  {
    path: 'connect-to-store',
    component: StoreLogComponent,
    title: 'connect-to-store'
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/not-found',
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
export const AppRouteComponent = [
  HomeComponent,
  DetailsComponent,
  CartComponent,
  PageNotFoundComponent,
  CartComponent,
  StoreComponent,
  StoreLogComponent,
  GetStartComponent
]
