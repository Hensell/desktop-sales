import { Component, OnInit } from '@angular/core';
import { ProductService } from '@app/data/services/api/product-api/product.service';
import { ProductModel } from '@app/shared/models/product-model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  data: ProductModel[] = [];
  constructor(private ProductService: ProductService) { }
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.ProductService.getProducts().subscribe((data: ProductModel[]) => {
      this.data = data;
      console.log(this.data);
    });
  }
  eliminarProducto(product: ProductModel) {
    // Llama al servicio para actualizar el estado del producto a inactivo (soft delete)
    product.active = false;
    this.ProductService.putProduct(product).subscribe(() => {
      // Actualiza la vista o realiza cualquier acción necesaria
    });
  }

  ActualizarProducto(product: ProductModel) {
    // Llama al servicio para actualizar el estado del producto a activo
    product.active = true;
    this.ProductService.putProduct(product).subscribe(() => {
      // Actualiza la vista o realiza cualquier acción necesaria
    });
  }

}
