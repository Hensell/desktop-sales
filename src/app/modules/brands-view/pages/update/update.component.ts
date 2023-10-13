import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandsService } from '@app/data/services/api/product-api/brands.service';
import { BrandModel } from '@app/shared/models/brand-model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  brand: BrandModel = new BrandModel(); 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private brandService: BrandsService
  ) {}
  ngOnInit(): void {
    
    const brandId = this.route.snapshot.paramMap.get('id')|| '0';
    this.brandService.getbyID (brandId).subscribe((data: BrandModel) => {
      this.brand = data;
    });
  }

  actualizarBrand() {
    this.brandService.put (this.brand).subscribe(() => {
    this.router.navigate(['/Brand/list']);
  });
}

}
