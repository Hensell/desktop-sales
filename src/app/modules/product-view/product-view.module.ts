import { NgModule } from '@angular/core';
import { ProductRoutingModule } from './product-view-routing.module';

import { SharedModule } from '@app/shared/shared.module';
import { CreateComponent } from './pages/create/create.component'; 


@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductViewModule { }
