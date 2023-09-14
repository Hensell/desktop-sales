import { Component, OnInit} from '@angular/core';
import { PriceListDetailsService } from '@app/data/services/api/product-api/price-list-details.service';
import { PriceListDetailsModel } from '@app/shared/models/price-list-details-model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  model: PriceListDetailsModel = new PriceListDetailsModel(); 

  constructor(private service: PriceListDetailsService, 
    private route: ActivatedRoute,
    private router: Router
    ) {}
    ngOnInit(): void {
    
      const Id = this.route.snapshot.paramMap.get('id')|| '0';
      const IdProduct = this.route.snapshot.paramMap.get('product')|| '0';
      this.service.getByIDProduct (Id,IdProduct ).subscribe((data: PriceListDetailsModel) => {
        this.model = data;
      });
    }
    update() {
      const Id = this.route.snapshot.paramMap.get('id')|| '0';
      const IdProduct = this.route.snapshot.paramMap.get('product')|| '0';
      this.service.put(this.model).subscribe(() => {
      this.router.navigate(['/PriceListDetails',Id
    ]);
    });
  }
}
