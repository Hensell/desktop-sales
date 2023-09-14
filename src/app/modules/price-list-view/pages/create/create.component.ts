import { Component } from '@angular/core';
import { PriceListService } from '@app/data/services/api/product-api/price-list.service';
import { PriceListModel } from '@app/shared/models/price-list-model';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  model: PriceListModel = new PriceListModel(); 

  constructor(private service: PriceListService) {}


  add() {
 this.model.companyID =1;
 this.model.active = true;
 

    this.service.postPriceList (this.model).subscribe((created) => {

      console.log('Pricle list creado:', created);
      
     
    });
  }
}
