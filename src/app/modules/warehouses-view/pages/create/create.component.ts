import { Component, OnInit} from '@angular/core';
import { WarehouseService } from '@app/data/services/api/product-api/warehouse.service';
import { WarehousesModel } from '@app/shared/models/warehouses-model';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  model: WarehousesModel = new WarehousesModel(); 
  warehouse: WarehousesModel[] = [];

  constructor(private service: WarehouseService, 
    private route: ActivatedRoute,
    private router: Router
    ) {}
 

  ngOnInit(): void {
      this.load();
   
    }
    load() {
      this.service.get(). subscribe((_model) => {
        this.warehouse = _model; 
      });
    }

    add() {
     
      this.model.companyID =1;
      this.model.active = true;
      this.model.branchID =1;
         this.service.post (this.model).subscribe((created) => {
           console.log('Pricle list creado:', created);
         });
     // this.warehouse.push(this.model);
    this.reloadCurrentRoute();
        }
  
    reloadCurrentRoute() {
      let currentUrl = this.router.url;
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate([currentUrl]);
      });
  }

  delete(model: WarehousesModel) {
   
    model.active = false;
    this.service.put(model).subscribe(() => {
      // Actualiza la vista o realiza cualquier acción necesaria
    });
  }

  update(model: WarehousesModel) {
   
    model.active = true;
    this.service.put(model).subscribe(() => {
      // Actualiza la vista o realiza cualquier acción necesaria
    });
  }


}
