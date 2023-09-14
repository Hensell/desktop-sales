import { Component, OnInit} from '@angular/core';
import { PriceListDetailsService } from '@app/data/services/api/product-api/price-list-details.service';
import { PriceListDetailsModel } from '@app/shared/models/price-list-details-model';


import {  ProductService } from '@app/data/services/api/product-api/product.service';
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
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadPriceListDetails();
  }
  loadProducts() {
    this.productService.getProducts(). subscribe((_products) => {
      this.product = _products; 
    });
  }

  loadPriceListDetails() {
    this.service.get(). subscribe((_model) => {
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
       this.router.navigate(['/PriceList/list']); }

}
