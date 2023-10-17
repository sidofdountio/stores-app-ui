import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  company = this.fb.group(
    {
      name: this.fb.nonNullable.control("",
        {
          validators: [Validators.required]
        }
      ),
      phone: this.fb.nonNullable.control("",
        {
          validators: [Validators.required,Validators.minLength(9)]
        }
      ),
      categorie: this.fb.control("",
        {
          validators: [Validators.required]
        }
      ),
      accept: this.fb.control("",
        {
          validators: [Validators.required]
        }
      )
    });

  constructor(private fb: FormBuilder) { }

}
