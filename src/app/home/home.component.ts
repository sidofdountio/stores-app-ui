import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Orders } from '../model/orders';
import { Product } from '../model/product-interface';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnInit {
  products: Product[] | undefined | null;
  orders:Orders[]=[];
  price : number = 0;

 numberOfItemInTheCart: number = 0;
  title: any = "Life Comapany";

  constructor(private rooter:Router) { }
  ngOnInit(): void {
    this.onGetProducts()
  }

  ngAfterViewInit() {
  }

  onLoaderOrder():void {
    this.rooter.navigate(['/order'])
    console.log("Moved to order..");
  }


  onGetProducts(): Product[] {
    return this.products = [
      {
        id: 1,
        name: "Shoes",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNGyVXPD4QPubBhz8V-2vlvcve9q_Joz0bBw&usqp=CAU",
        price: 5000.0,
        isFavorite: false
      },
      {
        id: 2,
        name: "T-shirt",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR31c1ncRm7ocFzxkOq7Wm4s2HBICWZrTIqaA&usqp=CAU",
        price: 5500.0,
        isFavorite: false
      },
    ];

  }


  onToggleFavorite(product: Product) {
    product.isFavorite = !product.isFavorite;
    console.log(product)
  }

  public onPlaceOrder(product:Product):void {
    this.orders.push({
      product: product,
      quantity: 0,
      amount: 0
    });
    this.numberOfItemInTheCart = this.orders.length;
    console.log(this.orders);
  }
}
