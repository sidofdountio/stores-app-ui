import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Orders } from '../model/orders';
import { Product } from '../model/product';
import { Router } from '@angular/router';
import { AppService } from '../service/app-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnInit {
  products: Product[] | undefined | null;

  price: number = 0;
  numberOfItemInTheCart: number = 0;
  title: any = "Lyfe Comapany";


  constructor(private rooter: Router, private appService: AppService) { }
  ngOnInit(): void {
    this.onGetProducts();
    this.onNumberOfItem();

  }

  ngAfterViewInit() {
  }

  onLoaderOrder(): void {
    this.rooter.navigate(['/cart'])
    console.log("Move to cart..");
  }

  onGetProducts(): void {
    this.products = this.appService.getProducts()
  }
  onToggleFavorite(product: Product) {
    product.isFavorite = !product.isFavorite;
  }

  public onPlaceOrder(product: Product): void {
    this.appService.addProductCart(product);
    this.numberOfItemInTheCart = this.appService.getItem().length;
  }

  public onNumberOfItem(): void {
  }

  public onGetOrders(): Orders[] {
    return this.appService.getItem();
  }

}
