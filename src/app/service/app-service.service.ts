import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Product } from '../model/product';
import { Observable, BehaviorSubject } from 'rxjs';
import { Orders } from '../model/orders';
import { CartItem } from '../model/cartItem';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseUrl: string = environment.URL;
  // Behavior cartItem:CartItem
  private cartItem$ = new BehaviorSubject<CartItem[]>([]);
  // cartItem:CartItem.
  private cartItem: CartItem[] = [];
  // Behavior product:Product
  private productList = new BehaviorSubject<Product[]>([{
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
  }]);

  constructor(private http: HttpClient) { }

  public getProducts(): Product[] {
    return this.productList.value;
  }

  public editeProduct(productToUdapte: Product) {
    for (let p of this.productList.value) {
      if (p.id === productToUdapte.id){
        p.name = productToUdapte.name;
        console.log(p);
      }
    }
  }
  // add product to cart. with parameter product:Product.
  public addProductCart(product: Product): void {
    this.cartItem.push({
      product: product,
      quantity: 1,
      amount: 0
    });
    // We will use it out this method.
    this.cartItem$.next(this.cartItem);
  }

  public getItem(): CartItem[] {
    return this.cartItem$.value;
  }

}