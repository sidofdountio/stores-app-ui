import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Orders } from '../model/orders';
import { AppService } from '../service/app-service.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  orders: Orders[] = [];
  orderList = new BehaviorSubject<Orders[]>([]);
  title: any = "Lyfe comapny";
  amount: number = 0;
  cartQuantity: number = 1;
  discount: number = 0;
  itemQuantity: number = 0;

  constructor(private router: Router, private appService: AppService) { }
  ngOnInit(): void {
    this.onGetOrders();
    this.onGetAmountOfOrder();
  }
  checkout() {
  }
  backToStore() {
    this.router.navigate(['/store']);
  }
  onGetOrders(): void {
    this.orders = this.appService.getOrders();
    this.itemQuantity = this.orders.length;
    this.orderList.next(this.orders);
  }

  addQuantity(item: Orders) {
    for (let index = 0; index < this.orderList.value.length; index++) {
      if (item.product.id === this.orderList.value[index].product.id) {
        this.orderList.value[index].quantity += 1;
        this.onGetAmountOfOrder();
        console.log("Add quantity");
      }
    }
  }

  removeQuantity(item: Orders) {
    for (let index = 0; index < this.orderList.value.length; index++) {
      if (item.product.id === this.orderList.value[index].product.id) {
        if (this.orderList.value[index].quantity == 1) {
          this.orderList.value[index].quantity = 1;
          this.onGetAmountOfOrder();
        }
        if (this.orderList.value[index].quantity > 1) {
          this.orderList.value[index].quantity -= 1;
          this.onGetAmountOfOrder();
        }
        console.log("Remove quantity");
      }
    }
  }

  private onGetAmountOfOrder(): void {
    var amt = 0;
    var unitPrice = 0;
    var qty = 0;
    if (this.orderList.value.length == 0) {
      this.amount = 0;
    }
    if (this.orderList.value.length >= 1) {
      for (let index = 0; index < this.orderList.value.length; index++) {
        qty = this.orderList.value[index].quantity;
        unitPrice = this.orderList.value[index].product.price;
        amt += qty * unitPrice;
      }
    }
    this.amount = amt;
  }

  onRemoveItem(item: Orders) {
    for (let index = 0; index < this.orderList.value.length; index++) {
      if (item.product.id === this.orderList.value[index].product.id) {
        this.orderList.value.splice(index,1)
      }
    }
    this.itemQuantity = this.orders.length;
  }

}
