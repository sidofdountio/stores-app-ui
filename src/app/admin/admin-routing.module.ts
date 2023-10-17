import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleComponent } from './sale/sale.component';
import { AdminComponent } from './dashboard/admin.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CustomerComponent } from './customer/customer.component';
import { OrdersComponent } from './orders/orders.component';
import { AuthGuard } from '../auth/auth.guard';
import { ProductListComponent } from './product/product-list/product-list.component';
import { EditeProfileComponent } from './user/edite-profile/edite-profile.component';
import { CanDeactivateGuard } from '../auth/can-deactivate.guard';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: SideBarComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          {
            path: 'sale',
            component: SaleComponent
          },
          {
            path: 'customer',
            component: CustomerComponent
          },
          {
            path: 'product',
            component: ProductListComponent,
            title: "product"
          },
          {
            path: 'orders',
            component: OrdersComponent
          },
          {
            path: 'profile',
            component: EditeProfileComponent,
            title: "profile",
            canDeactivate: [CanDeactivateGuard]
          },
          {
            path: '',
            component: AdminComponent,
            title: 'Mystore'
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
