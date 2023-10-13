import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandModel } from '@app/shared/models/brand-model';

import { ApiService } from '@app/data/constants/api.service';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {




 constructor(private http: HttpClient,private apiService: ApiService) { }

 public get(): Observable<BrandModel[]> {
  return this.http.get<BrandModel[]>(this.apiService.getApiUrl() +'Brands/Get'); 
  }

  public put(updatedBrand: BrandModel): Observable<BrandModel> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<BrandModel>(this.apiService.getApiUrl() + 'Brands/Update', updatedBrand, httpOptions);
  }
  public getbyID(brandId: string): Observable<BrandModel> {
    return this.http.get<BrandModel>(this.apiService.getApiUrl()+`Brands/GetByID?ID=${brandId}`); 
  }
  public post(newBrand: BrandModel): Observable<BrandModel> {
    return this.http.post<BrandModel>(this.apiService.getApiUrl() + 'Brands/Create', newBrand);
  }
}
