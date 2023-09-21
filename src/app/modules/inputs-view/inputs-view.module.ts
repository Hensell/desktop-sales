import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { CreateComponent } from './pages/create/create.component';
import { InputsRoutingModule } from './inputs-view-rounting.module';
import { DigitOnlyModule } from '@uiowa/digit-only';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    SharedModule,InputsRoutingModule,
    DigitOnlyModule,MatAutocompleteModule
  ]
})
export class InputsViewModule { }
