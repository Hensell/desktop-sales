import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PriceListService } from '@app/data/services/api/product-api/price-list.service';
import { PriceListModel } from '@app/shared/models/price-list-model';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  model: PriceListModel = new PriceListModel(); 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PriceListService
  ) {}

  ngOnInit(): void {
    
    const Id = this.route.snapshot.paramMap.get('id')|| '0';
    this.service.getByID (Id).subscribe((data: PriceListModel) => {
      this.model = data;
    });
  }

  update() {
    
      this.service.putPriceList(this.model).subscribe(() => {
      this.router.navigate(['/PriceList/list']);
    });
  }
}
