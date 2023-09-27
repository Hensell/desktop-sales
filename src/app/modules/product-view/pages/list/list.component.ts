import { Component, OnInit } from '@angular/core';
import { ProductService } from '@app/data/services/api/product-api/product.service';
import { ProductModel } from '@app/shared/models/product-model';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from '../create/create.component';


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
  constructor(private ProductService: ProductService, public dialog: MatDialog) { }
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
   
    product.active = false;
    this.ProductService.putProduct(product).subscribe(() => {
      // Actualiza la vista o realiza cualquier acción necesaria
    });
  }

  ActualizarProducto(product: ProductModel) {
   
    product.active = true;
    this.ProductService.putProduct(product).subscribe(() => {
      // Actualiza la vista o realiza cualquier acción necesaria
    });
  }

}
