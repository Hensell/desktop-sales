import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { PriceListDetailsRoutingModule } from './price-list-details-view-rounting.module';
import { CreateComponent } from './pages/create/create.component';
import { UpdateComponent } from './pages/update/update.component';


@NgModule({
  declarations: [
    CreateComponent,UpdateComponent
  ],
  imports: [
    SharedModule,PriceListDetailsRoutingModule
  ]
})
export class PriceListDetailsViewModule { }
