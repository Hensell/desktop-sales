import { Component, OnInit} from '@angular/core';
import { PriceListDetailsService } from '@app/data/services/api/product-api/price-list-details.service';
import { PriceListDetailsModel } from '@app/shared/models/price-list-details-model';


import {  ProductsService } from '@app/data/services/api/product-api/products.service';
import { ProductModel } from '@app/shared/models/product-model';

import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  model: PriceListDetailsModel = new PriceListDetailsModel(); 
  product: ProductModel[] = [];
  priceListDetails: PriceListDetailsModel[] = [];

  constructor(private service: PriceListDetailsService, 
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadPriceListDetails();
  }
  loadProducts() {
    this.productService.get(). subscribe((_products) => {
      this.product = _products; 
    });
  }

  loadPriceListDetails() {
    this.service.getByID(this.route.snapshot.paramMap.get('id')|| '0'). subscribe((_model) => {
      this.priceListDetails = _model; 
    });
  }
  add() {
    this.model.priceID = parseInt(this.route.snapshot.paramMap.get('id')|| '0',10);
    this.model.companyID =1;
    this.model.active = true;
       this.service.post (this.model).subscribe((created) => {
         console.log('Pricle list creado:', created);
       });
    //this.priceListDetails.push(this.model);
   this.reloadCurrentRoute();
      }
      
      getProductName(productId: number): any {
        return this.product.find((p) => p.productID === productId);
      }


      reloadCurrentRoute() {
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate([currentUrl]);
        });
    }


    delete(model: PriceListDetailsModel) {
   
      model.active = false;
      this.service .put(model).subscribe(() => {
        // Actualiza la vista o realiza cualquier acción necesaria
      });
    }
  
    update(model: PriceListDetailsModel) {
     
      model.active = true;
      this.service.put(model).subscribe(() => {
        // Actualiza la vista o realiza cualquier acción necesaria
      });
    }
}
