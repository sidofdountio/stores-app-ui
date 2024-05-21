import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Product } from '../model/product';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { CartItem } from '../model/cartItem';
import { CustomResponse } from '../model/custom-response';


@Injectable({ providedIn: 'root' })
export class AppService {

  private readonly baseUrl: string = environment.URL;
  // Behavior cartItem:CartItem
  private cartItem$ = new BehaviorSubject<CartItem[]>([]);
  // cartItem:CartItem.
  private cartItem: CartItem[] = [];
  // Behavior product:Product
  private productList = new BehaviorSubject<Product[]>([
    {
      id: 1,
      name: "Shoes",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNGyVXPD4QPubBhz8V-2vlvcve9q_Joz0bBw&usqp=CAU",
      price: 5000,
      isFavorite: false
    },
    {
      id: 2,
      name: "Shoes",
      imageUrl: "https://www.pexels.com/photo/close-up-of-shoes-and-bag-336372/",
      price: 5000,
      isFavorite: false
    },
    {
      id: 3,
      name: "Shoes",
      imageUrl: "https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg",
      price: 5000,
      isFavorite: false
    },
    {
      id: 4,
      name: "Shoes",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNGyVXPD4QPubBhz8V-2vlvcve9q_Joz0bBw&usqp=CAU",
      price: 5000,
      isFavorite: false
    },
    {
      id: 5,
      name: "Shoes",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNGyVXPD4QPubBhz8V-2vlvcve9q_Joz0bBw&usqp=CAU",
      price: 5000,
      isFavorite: false
    },
    {
      id: 6,
      name: "Shoes",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNGyVXPD4QPubBhz8V-2vlvcve9q_Joz0bBw&usqp=CAU",
      price: 5000,
      isFavorite: false
    },
    {
      id: 7,
      name: "Shoes",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNGyVXPD4QPubBhz8V-2vlvcve9q_Joz0bBw&usqp=CAU",
      price: 5000,
      isFavorite: false
    }
  ]);

  constructor(private http: HttpClient) { }

  public getProducts(): Product[] {
    return this.productList.value;
  }

  public editeProduct(productToUdapte: Product) {
    for (let p of this.productList.value) {
      if (p.id === productToUdapte.id) {
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

  // Get users
  public getUsers(): Observable<CustomResponse> {
    return this.http.get<CustomResponse>(`${this.baseUrl}/user/users`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${localStorage.getItem('token')
          }`
      })
    });
  }



  users$ = <Observable<CustomResponse>>this.http
    .get<CustomResponse>(`${this.baseUrl}/user`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${localStorage.getItem('token')
          }`
      })
    })
    .pipe(
      tap(console.log),
      catchError(this.handleError)
    );

  handleError(error: HttpErrorResponse): Observable<never> {

    return throwError(() => "Error code : " + error.status);
  }


}


