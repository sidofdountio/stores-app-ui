import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CanComponentDeactivate } from 'src/app/auth/can-deactivate.guard';
import { DialogService } from 'src/app/service/dialog.service';

@Component({
  selector: 'app-edite-profile',
  templateUrl: './edite-profile.component.html',
  styleUrls: ['./edite-profile.component.css']
})
export class EditeProfileComponent implements CanComponentDeactivate {
  private saveChange: boolean = false;
  constructor(private router: Router, private serviceDialpg: DialogService) { }

  

  goBack() {
    this.saveChange = false;
  }

  onSaveProfile() {
    this.saveChange = true;
    this.router.navigate(['/admin']);
  }

  canDeactivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.saveChange){
      return confirm('Are you sure you want to navigate away?');
    }
    return true;
  }

}
