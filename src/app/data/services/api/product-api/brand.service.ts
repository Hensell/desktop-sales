import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandModel } from '@app/shared/models/brand-model';
@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private urlApi = 'http://localhost:100/api/';



 constructor(private http: HttpClient) { }
}
