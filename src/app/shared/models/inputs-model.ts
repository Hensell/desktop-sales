import { InputsDetailsModel } from "./inputs-details-model";

export class InputsModel {
    companyID: number;
    branchID: number;
    warehouseID: number;
    inputTypeID: number; 
    inputID: number;
    inputDate: String;
    employeeID: number;
    subTotal: number;
    discount: number;
    taxAmt: number;
    freight: number;
    totalDue: number;
    currencyCode: String;
    status: number;
    listModel: InputsDetailsModel[];
  }