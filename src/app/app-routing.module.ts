import { NgModule } from '@angular/core';
import { RouterModule, Routes, TitleStrategy } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page.not.found/page.not.found.component';
import { DetailsComponent } from './details/details.component';
import { TemplatePageTitleStrategy } from 'src/app/template.page.title.strategy';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: "Home"
  },
  {
    path: 'order',
    component: CartComponent,
    title: "Order"
  },
  {
    path:'**',
    title: 'Page not found',
    component: PageNotFoundComponent,
    
  },
  {
    path:'details/:id',
    title:'Details',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
  ]
})
export class AppRoutingModule { }
