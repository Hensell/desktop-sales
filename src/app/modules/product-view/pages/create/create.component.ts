import { Component, OnInit } from '@angular/core';
import { ProductService } from '@app/data/services/api/product-api/product.service';
import { ProductModel } from '@app/shared/models/product-model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newProduct: ProductModel = new ProductModel(); 

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
  
  }

  agregarProducto() {

    //TODO ir actulizando esto que va quemao
    this.newProduct.companyID =1;
    this.newProduct.supplierID =1;
    this.newProduct.brandID =1;
    this.newProduct.categoryID =1;
    this.newProduct.subCategoryID =1;
    this.newProduct.baseMeasureID =1;
    this.newProduct.defaultOutMeasureID =1;
    this.newProduct.defaultInMeasureID =1;
    this.newProduct.defaultSaleMeasureID =1;
 

    this.productService.postProduct(this.newProduct).subscribe((productoCreado) => {

      console.log('Producto creado:', productoCreado);
      
     
    });
  }
}
