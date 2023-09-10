import { NgModule } from '@angular/core';
import { ProductRoutingModule } from './product-view-routing.module';

import { SharedModule } from '@app/shared/shared.module';
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
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductViewModule { }
