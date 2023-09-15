import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { UpdateComponent } from './pages/update/update.component';
import { CreateComponent } from './pages/create/create.component';
import { WarehouseRoutingModule } from './warehouses-view-routing.module';


@NgModule({
  declarations: [
    UpdateComponent,
    CreateComponent
  ],
  imports: [
    SharedModule,
    WarehouseRoutingModule
  ]
})
export class WarehousesViewModule { }
