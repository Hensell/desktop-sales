import { Component, OnInit } from '@angular/core';
import { BrandModel } from '@app/shared/models/brand-model';
import { BrandsService } from '@app/data/services/api/product-api/brands.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  data: BrandModel[] = [];
  constructor(private BrandService: BrandsService) { }
  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.BrandService.get().subscribe((data: BrandModel[]) => {
      this.data = data;
      console.log(this.data);
    });
  }
  eliminarBrand(brand: BrandModel) {
   
    brand.active = false;
    this.BrandService.put(brand).subscribe(() => {
      // Actualiza la vista o realiza cualquier acción necesaria
    });
  }

  ActualizarBrand(brand: BrandModel) {
   
    brand.active = true;
    this.BrandService.put(brand).subscribe(() => {
      // Actualiza la vista o realiza cualquier acción necesaria
    });
  }
}
