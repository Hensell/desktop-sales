import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandService } from '@app/data/services/api/product-api/brand.service';
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
    private brandService: BrandService
  ) {}
  ngOnInit(): void {
    
    const brandId = this.route.snapshot.paramMap.get('id')|| '0';
    this.brandService.getBrandbyID (brandId).subscribe((data: BrandModel) => {
      this.brand = data;
    });
  }

  actualizarBrand() {
    this.brandService.putBrand  (this.brand).subscribe(() => {
    this.router.navigate(['/Brand/list']);
  });
}

}
