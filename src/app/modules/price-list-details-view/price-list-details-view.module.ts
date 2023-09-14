import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { PriceListDetailsRoutingModule } from './price-list-details-view-rounting.module';
import { CreateComponent } from './pages/create/create.component';



@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    SharedModule,PriceListDetailsRoutingModule
  ]
})
export class PriceListDetailsViewModule { }
