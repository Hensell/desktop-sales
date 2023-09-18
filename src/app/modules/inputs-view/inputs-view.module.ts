import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { CreateComponent } from './pages/create/create.component';
import { InputsRoutingModule } from './inputs-view-rounting.module';


@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    SharedModule,InputsRoutingModule
  ]
})
export class InputsViewModule { }
