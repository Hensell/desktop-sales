import { Component, OnInit } from '@angular/core';
import { BrandsService } from '@app/data/services/api/product-api/brands.service';
import { BrandModel } from '@app/shared/models/brand-model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newBrand: BrandModel = new BrandModel(); 

  constructor(private bradService: BrandsService) {}

  ngOnInit(): void {
  
  }

  agregarBrand() {

    //TODO ir actulizando esto que va quemao
    this.newBrand.companyID =1;
  this.newBrand.active = true;
 

    this.bradService .  post(this.newBrand).subscribe((marcaCreada) => {

      console.log('Marca creado:', marcaCreada);
      
     
    });
  }

}
