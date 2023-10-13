import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@app/data/services/api/product-api/products.service';
import { ProductModel } from '@app/shared/models/product-model';

import {  BrandsService } from '@app/data/services/api/product-api/brands.service';
import { BrandModel } from '@app/shared/models/brand-model';

import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newProduct: ProductModel = new ProductModel(); 
  marcas: BrandModel[] = [];

  constructor(private productService: ProductsService,
    private brandService: BrandsService, public dialogRef: MatDialogRef<CreateComponent>) {}

  ngOnInit(): void {
    this.loadBrands();
    this.newProduct.taxes = false;
    this.newProduct.forSale = false;
  }
  loadBrands() {
    this.brandService.get().subscribe((brands) => {
      this.marcas = brands; 
    });
  }
  onCancel() {
    // Puedes realizar acciones de cancelación si es necesario
  
    // Cierra el diálogo sin guardar
    this.dialogRef.close();
  }
  agregarProducto() {

    //TODO ir actulizando esto que va quemao
    this.newProduct.companyID =1;
    this.newProduct.supplierID =1;
    this.newProduct.categoryID =1;
    this.newProduct.subCategoryID =1;
    this.newProduct.baseMeasureID =1;
    this.newProduct.defaultOutMeasureID =1;
    this.newProduct.defaultInMeasureID =1;
    this.newProduct.defaultSaleMeasureID =1;
 

    this.productService.post(this.newProduct).subscribe((productoCreado) => {

      console.log('Producto creado:', productoCreado);
      
     
    });
  }
}
