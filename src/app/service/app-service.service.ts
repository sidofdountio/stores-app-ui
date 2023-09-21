import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Product } from '../model/product-interface';
import { Observable,BehaviorSubject } from 'rxjs';
import { Orders } from '../model/orders';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseUrl: string = environment.URL;
  private cartItem = new BehaviorSubject<Orders[]>([]);
  private orders: Orders[] =[];
  constructor(private http: HttpClient) { }
  public getProducts(): Product[] {
    return [
      {
        id: 1,
        name: "Shoes",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNGyVXPD4QPubBhz8V-2vlvcve9q_Joz0bBw&usqp=CAU",
        price: 5000,
        isFavorite: false
      },
      {
        id: 2,
        name: "Wedding",
        imageUrl: "https://ultimatetraditionaldesigns.com/wp-content/uploads/2023/09/c418b3a4-c9b4-4e38-93e8-1aef452dc00b-300x300.jpg",
        price: 5500,
        isFavorite: false
      }
    ];
  }

  public addProductCart(product: Product): void{
    this.orders.push({
      product: product,
      quantity: 1,
      amount: 0
    });
    this.cartItem.next(this.orders);
   
  }

  public getOrders():Orders[]{
    console.log(this.cartItem.value);
    return this.cartItem.value;
  }
}
