import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { WarehousesModel } from '@app/shared/models/warehouses-model';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {
  private urlApi = 'http://localhost:100/api/';
  constructor(private http: HttpClient) { }

  public get(): Observable<WarehousesModel[]> {
    return this.http.get<WarehousesModel[]>(this.urlApi+'Warehouse/Get'); 
    }

    public put(model: WarehousesModel): Observable<WarehousesModel> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
  
      return this.http.post<WarehousesModel>(this.urlApi + 'Warehouse/Update', model, httpOptions);
    }
    public post(model: WarehousesModel): Observable<WarehousesModel> {
      return this.http.post<WarehousesModel>(this.urlApi + 'Warehouse/Create', model);
    }
     
    public getByID(Id: string): Observable<WarehousesModel> {
      return this.http.get<WarehousesModel>(this.urlApi+`Warehouse/GetByID?ID=${Id}`); 
    }
   
}
