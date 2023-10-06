import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogService } from 'src/app/service/dialog.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  allowChange: boolean = false;
  discase!: boolean;
  form!: FormGroup;
  constructor(private dialogRef: MatDialogRef<EditProductComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private formBuild: FormBuilder,
   private serviceDialog: DialogService) {
    this.form = this.formBuild.group({
      name: [data.name, Validators.required], price: [data.price, Validators.required], id: [data.id]
    })
  }

  save() {
    this.allowChange = true;
    this.dialogRef.close(this.form.value);
  }
  cancel() {
    if (!this.allowChange) {
      this.serviceDialog.confirmMessage("Do you want to discard the change ?");
      this.serviceDialog.closeEditeDialog$().subscribe(
        ((response) =>{
          if (response){
            this.dialogRef.close();
            this.serviceDialog.updateValue();
          }
        })
      );
    } else {
      this.dialogRef.close();
    }

  }



}
