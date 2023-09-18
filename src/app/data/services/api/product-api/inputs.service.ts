import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InputsModel } from '@app/shared/models/inputs-model';

@Injectable({
  providedIn: 'root'
})
export class InputsService {
  private urlApi = 'http://localhost:100/api/';
  constructor(private http: HttpClient) { }

  public get(): Observable<InputsModel[]> {
    return this.http.get<InputsModel[]>(this.urlApi+'Inputs/Get'); 
    }

    public put(model: InputsModel): Observable<InputsModel> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
  
      return this.http.post<InputsModel>(this.urlApi + 'Inputs/Update', model, httpOptions);
    }
    public post(model: InputsModel): Observable<InputsModel> {
      return this.http.post<InputsModel>(this.urlApi + 'Inputs/Create', model);
    }
     
    public getByID(Id: string): Observable<InputsModel> {
      return this.http.get<InputsModel>(this.urlApi+`Inputs/GetByID?ID=${Id}`); 
    }
}
