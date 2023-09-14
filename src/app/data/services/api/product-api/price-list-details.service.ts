import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PriceListDetailsModel } from '@app/shared/models/price-list-details-model';


@Injectable({
  providedIn: 'root'
})
export class PriceListDetailsService {
  private urlApi = 'http://localhost:100/api/';
  constructor(private http: HttpClient) { }

  public get(): Observable<PriceListDetailsModel[]> {
    return this.http.get<PriceListDetailsModel[]>(this.urlApi+'PriceListDetails/GetPriceDetailsList'); 
    }

    public put(model: PriceListDetailsModel): Observable<PriceListDetailsModel> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
  
      return this.http.post<PriceListDetailsModel>(this.urlApi + 'PriceListDetails/UpdatePriceListDetails', model, httpOptions);
    }
    public post(model: PriceListDetailsModel): Observable<PriceListDetailsModel> {
      return this.http.post<PriceListDetailsModel>(this.urlApi + 'PriceListDetails/CreatePriceListDetails', model);
    }
     
    public getByID(Id: string): Observable<PriceListDetailsModel[]> {
      return this.http.get<PriceListDetailsModel[]>(this.urlApi+`PriceListDetails/GetPriceListDetailsByID?ID=${Id}`); 
    }
    public getByIDProduct(Id: string, ProductID : string): Observable<PriceListDetailsModel> {
      return this.http.get<PriceListDetailsModel>(this.urlApi+`PriceListDetails/GetPriceListDetailsByIDProduct?ID=${Id}&_ProductID=${ProductID}`); 
    }
}
