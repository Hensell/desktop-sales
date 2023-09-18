import { Component } from '@angular/core';
import { InputsService } from '@app/data/services/api/product-api/inputs.service';
import { InputsModel } from '@app/shared/models/inputs-model';
import { InputsDetailsModel } from '@app/shared/models/inputs-details-model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  model: InputsModel = new InputsModel(); 
  data: InputsDetailsModel = new InputsDetailsModel() ;
  constructor(private service: InputsService) {
    this.model.listModel = [];
  }

  add() {
    this.model.companyID =1;
    this.data.companyID= 2;
    this.model.listModel.push(this.data);   
    

     }
}
