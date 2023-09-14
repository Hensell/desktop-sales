import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { PriceListRoutingModule } from './price-list-view-routing.module';
import { CreateComponent } from './pages/create/create.component';
import { ListComponent } from './pages/list/list.component';
import { UpdateComponent } from './pages/update/update.component';


@NgModule({
  declarations: [
    CreateComponent,
    ListComponent,
    UpdateComponent
  ],
  imports: [
    SharedModule,PriceListRoutingModule
  ]
})
export class PriceListViewModule { }
