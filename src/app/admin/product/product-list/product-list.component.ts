import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/model/product';
import { AppService } from 'src/app/service/app-service.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditProductComponent } from '../edit-product/edit-product.component';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['name', 'price', 'image', 'action'];
  products: Product[] = [];
  dataSource = new MatTableDataSource<Product>([]);
  productToEdite: Product | undefined;

  constructor(private appService: AppService, private dialog: MatDialog) { }
  ngOnInit(): void {
    this.onGetProduct();
    this.products = this.onGetProduct();
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onGetProduct(): Product[] {
    return this.dataSource.data = this.appService.getProducts();
  }

  onEdite(productId: number): void {
    for (const product of this.products) {
      if (product.id === productId) {
        this.productToEdite = product;
      }
    }
    const dialogConf = new MatDialogConfig();
    dialogConf.autoFocus = true;
    dialogConf.disableClose = true;
    dialogConf.data = this.productToEdite;
    const dialogRef = this.dialog.open(EditProductComponent, dialogConf);
    dialogRef.afterClosed().subscribe(
      (productToUdapte: Product) => {
        this.updateProduct(productToUdapte);
      },
      (error: any) => {
        console.log("error" + error);
      }
    );

  }

  updateProduct(productToUdapte: Product) {
    this.appService.editeProduct(productToUdapte);
  }
}
