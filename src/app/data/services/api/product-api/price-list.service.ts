import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PriceListModel } from '@app/shared/models/price-list-model';

@Injectable({
  providedIn: 'root'
})
export class PriceListService {
  private urlApi = 'http://localhost:100/api/';
  constructor(private http: HttpClient) { }

  public getPriceList(): Observable<PriceListModel[]> {
    return this.http.get<PriceListModel[]>(this.urlApi+'PriceList/Get'); 
    }

    public putPriceList(model: PriceListModel): Observable<PriceListModel> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
  
      return this.http.post<PriceListModel>(this.urlApi + 'PriceList/Update', model, httpOptions);
    }
    public postPriceList(model: PriceListModel): Observable<PriceListModel> {
      return this.http.post<PriceListModel>(this.urlApi + 'PriceList/Create', model);
    }
     
    public getByID(Id: string): Observable<PriceListModel> {
      return this.http.get<PriceListModel>(this.urlApi+`PriceList/GetByID?ID=${Id}`); 
    }
}
