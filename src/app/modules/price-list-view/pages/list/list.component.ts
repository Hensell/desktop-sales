import { Component, OnInit } from '@angular/core';
import { PriceListService } from '@app/data/services/api/product-api/price-list.service';
import { PriceListModel } from '@app/shared/models/price-list-model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  data: PriceListModel[] = [];
  constructor(private PriceListService: PriceListService) { }
  ngOnInit(): void {
    this.getList();
  }
  getList() {
    this.PriceListService.getPriceList() .subscribe((data: PriceListModel[]) => {
      this.data = data;
      console.log(this.data);
    });
  }
  delete(model: PriceListModel) {
   
    model.active = false;
    this.PriceListService.putPriceList(model).subscribe(() => {
      // Actualiza la vista o realiza cualquier acción necesaria
    });
  }

  update(model: PriceListModel) {
   
    model.active = true;
    this.PriceListService.putPriceList(model).subscribe(() => {
      // Actualiza la vista o realiza cualquier acción necesaria
    });
  }

}
