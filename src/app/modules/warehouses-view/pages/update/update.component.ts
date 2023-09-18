import { Component, OnInit} from '@angular/core';
import { WarehouseService } from '@app/data/services/api/product-api/warehouse.service';
import { WarehousesModel } from '@app/shared/models/warehouses-model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  model: WarehousesModel = new WarehousesModel(); 

  constructor(private service: WarehouseService, 
    private route: ActivatedRoute,
    private router: Router
    ) {}

    ngOnInit(): void {
    
      const Id = this.route.snapshot.paramMap.get('id')|| '0';
      
      this.service.getByID (Id ).subscribe((data: WarehousesModel) => {
        this.model = data;
      });
    }
    update() {
      const Id = this.route.snapshot.paramMap.get('id')|| '0';
      this.service.put(this.model).subscribe(() => {
      this.router.navigate(['/Warehouse' ]);
    });

  }
}
