import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InputsTypesModel } from '@app/shared/models/inputs-types.models';

@Injectable({
  providedIn: 'root'
})
export class InputsTypesService {
  private urlApi = 'http://localhost:100/api/';
  constructor(private http: HttpClient) { }

  public get(): Observable<InputsTypesModel[]> {
    return this.http.get<InputsTypesModel[]>(this.urlApi+'InputsType/Get'); 
    }
}
