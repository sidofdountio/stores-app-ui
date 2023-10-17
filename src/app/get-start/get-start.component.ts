import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-start',
  templateUrl: './get-start.component.html',
  styleUrls: ['./get-start.component.css']
})
export class GetStartComponent {
  constructor(private route: Router) { }

  getStarted() {
    this.route.navigate(["/web"])
  }
}
