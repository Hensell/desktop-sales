import { Component, OnInit } from '@angular/core';
import { BrandModel } from '@app/shared/models/brand-model';
import { BrandService } from '@app/data/services/api/product-api/brand.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  data: BrandModel[] = [];
  constructor(private BrandService: BrandService) { }
  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.BrandService.getBrands().subscribe((data: BrandModel[]) => {
      this.data = data;
      console.log(this.data);
    });
  }
  eliminarBrand(brand: BrandModel) {
   
    brand.active = false;
    this.BrandService.putBrand(brand).subscribe(() => {
      // Actualiza la vista o realiza cualquier acción necesaria
    });
  }

  ActualizarBrand(brand: BrandModel) {
   
    brand.active = true;
    this.BrandService.putBrand(brand).subscribe(() => {
      // Actualiza la vista o realiza cualquier acción necesaria
    });
  }
}
