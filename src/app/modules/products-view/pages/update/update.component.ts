import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '@app/data/services/api/product-api/products.service';
import { ProductModel } from '@app/shared/models/product-model';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  producto: ProductModel = new ProductModel(); 
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    
    const productId = this.route.snapshot.paramMap.get('id')|| '0';
    this.productService.getByID(productId).subscribe((data: ProductModel) => {
      this.producto = data;
    });
  }

  actualizarProducto() {
    
      this.productService.put(this.producto).subscribe(() => {
      this.router.navigate(['/Product/list']);
    });
  }

}
