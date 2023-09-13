import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { Orders } from 'src/app/model/orders';
import { Product } from 'src/app/model/product-interface';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements AfterViewInit, OnInit {
  products: Product[] | undefined | null;
  orders:Orders[]=[];
  price : number = 0;

  @Output()numberOfItemInTheCart = new EventEmitter<number>();

  constructor() { }
  ngOnInit(): void {
    this.onGetProducts()
  }

  ngAfterViewInit() {
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
    product.isFavorite=true;
    console.log(product)
  }

  public onPlaceOrder(product:Product):void {
    this.orders.push({
      product: product,
      quantity: 0,
      amount: 0
    });
    this.numberOfItemInTheCart.emit(this.orders.length);
    console.log(this.orders);
  }

}
