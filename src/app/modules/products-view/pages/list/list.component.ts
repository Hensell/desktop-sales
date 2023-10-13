import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@app/data/services/api/product-api/products.service';
import { ProductModel } from '@app/shared/models/product-model';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from '../create/create.component';

import {  BrandsService } from '@app/data/services/api/product-api/brands.service';
import { BrandModel } from '@app/shared/models/brand-model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  openProductCreationDialog() {
    const dialogRef = this.dialog.open(CreateComponent, {
      width: '400px', // Puedes ajustar el ancho según tus necesidades
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Diálogo cerrado', result);
      // Aquí puedes realizar acciones después de que se cierre la ventana de creación
    });
  }

  data: ProductModel[] = [];
  marcas: BrandModel[] = [];
  constructor(private ProductService: ProductsService,  private brandService: BrandsService,
    public dialog: MatDialog) { }


  ngOnInit(): void {
    this.getProducts();
    this.loadBrands();
  }
  loadBrands() {
    this.brandService.get().subscribe((brands) => {
      this.marcas = brands; 
    });
  }

  getProducts() {
    this.ProductService.get().subscribe((data: ProductModel[]) => {
      this.data = data;
      console.log(this.data);
    });
  }
  getBrandNombre(BrandID: number): string {
    const brands = this.marcas.find((p) => p.brandID === BrandID);
    return brands ? brands.brandName  : ''; // Devuelve el nombre si se encuentra, de lo contrario, una cadena vacía
  }
  eliminarProducto(product: ProductModel) {
   
    product.active = false;
    this.ProductService.put(product).subscribe(() => {
      // Actualiza la vista o realiza cualquier acción necesaria
    });
  }

  ActualizarProducto(product: ProductModel) {
   
    product.active = true;
    this.ProductService.put(product).subscribe(() => {
      // Actualiza la vista o realiza cualquier acción necesaria
    });
  }

}
