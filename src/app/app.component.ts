import { AfterViewInit, Component, OnInit, enableProdMode } from '@angular/core';
import { Product } from 'src/model/product-interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  title = 'Lyfecompany';
  product: Product[] = [];


  ngAfterViewInit(): void {
    const likeButton = document.querySelectorAll("#likeButton");
    if (likeButton) {
      for (let index = 0; index < likeButton.length; index++) {
        const element = likeButton[index];
        element.classList.add("like", "like-no");
        // element.setAttribute("button", "button");
      }
    }
    const likes = document.querySelectorAll('.like');
      likes.forEach(like => {
        like.addEventListener("click", (event: Event) => {
          (<HTMLButtonElement>event.target).classList.toggle("like-no");
          (<HTMLButtonElement>event.target).classList.toggle("like-yes");
          if ((<HTMLButtonElement>event.target).classList.contains("like-yes")) {
            const changeColor = (<HTMLButtonElement>event.target).getElementsByClassName("like-yes")[0];
            console.log(changeColor);
            
            console.log("saving favorie");
          }
          else {
            console.log("removing favorie");
          }
        })
      })
  }

  ngOnInit(): void {
    this.onProduct();
    
  }

  onLikeProduct(event: Event): void {
    // const likes = document.querySelectorAll('.like');
    // likes.forEach(like => {
    //   like.addEventListener("click", (event: Event) => {
    //     (<HTMLButtonElement>event.target).classList.toggle("like-no");
    //     (<HTMLButtonElement>event.target).classList.toggle("like-yes");
    //     if ((<HTMLButtonElement>event.target).classList.contains("like-yes")) {
    //       console.log("saving favorie");
    //     }
    //     else {
    //       console.log("removing favorie");
    //     }
    //   })
    // })
  }

  onProduct(): void {
    this.product = [
      {
        id: 1,
        name: "Shoes",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNGyVXPD4QPubBhz8V-2vlvcve9q_Joz0bBw&usqp=CAU",
        price: 5000.0,
        isLike: true
      },
      {
        id: 2,
        name: "T-shirt",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR31c1ncRm7ocFzxkOq7Wm4s2HBICWZrTIqaA&usqp=CAU",
        price: 700.0
      },
    ]
  }



  onAddProductToCart(product: Product): void {
    console.log(product)

    const productBtn = document.getElementById('btn-test');
    if (productBtn != null) {

      productBtn.style.color = '#f44336';
      console.log(productBtn.getAttribute('id'));
    }
  }
}

// https://www.linkedin.com/in/sidof-dountio-76381a217


