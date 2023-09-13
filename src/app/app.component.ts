import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, enableProdMode } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  title = 'Lyfecompany';


  constructor(private rooter:Router) {

  }
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
  }

  onChangeNumberOfItemInTheCart(data:any):void{
    
  }

  onLoaderOrder():void {
    this.rooter.navigate(['/order'])
    console.log("Moved to order..");
  }

}

// https://www.linkedin.com/in/sidof-dountio-76381a217
// 650716184


