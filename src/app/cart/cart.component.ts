import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Orders } from '../model/orders';
import { AppService } from '../service/app-service.service';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../model/cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // cartItem:CartItem
  cartItem: CartItem[] = [];
  // Behavior cartItem:CartItem
  cartItem$ = new BehaviorSubject<CartItem[]>([]);
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
    this.cartItem = this.appService.getItem();
    this.itemQuantity = this.cartItem.length;
    this.cartItem$.next(this.cartItem);
  }
  
  addQuantity(item: CartItem) {
    for (let index = 0; index < this.cartItem$.value.length; index++) {
      if (item.product.id === this.cartItem$.value[index].product.id) {
        this.cartItem$.value[index].quantity += 1;
        this.onGetAmountOfOrder();
        console.log("Add quantity");
      }
    }
  }

  removeQuantity(item: CartItem) {
    for (let index = 0; index < this.cartItem$.value.length; index++) {
      if (item.product.id === this.cartItem$.value[index].product.id) {
        if (this.cartItem$.value[index].quantity == 1) {
          this.cartItem$.value[index].quantity = 1;
          this.onGetAmountOfOrder();
        }
        if (this.cartItem$.value[index].quantity > 1) {
          this.cartItem$.value[index].quantity -= 1;
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
    if (this.cartItem$.value.length == 0) {
      this.amount = 0;
    }
    if (this.cartItem$.value.length >= 1) {
      for (let index = 0; index < this.cartItem$.value.length; index++) {
        qty = this.cartItem$.value[index].quantity;
        unitPrice = this.cartItem$.value[index].product.price;
        amt += qty * unitPrice;
      }
    }
    this.amount = amt;
  }

  onRemoveItem(item: CartItem) {
    for (let index = 0; index < this.cartItem$.value.length; index++) {
      if (item.product.id === this.cartItem$.value[index].product.id) {
        this.cartItem$.value.splice(index,1)
      }
    }
    this.itemQuantity = this.cartItem.length;
    //TODO: Update value of total after removing item.
  }

}
