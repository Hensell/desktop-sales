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

 public getBrands(): Observable<BrandModel[]> {
  return this.http.get<BrandModel[]>(this.urlApi+'Brands/GetBrands'); 
  }

  public putBrand(updatedBrand: BrandModel): Observable<BrandModel> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<BrandModel>(this.urlApi + 'Brands/UpdateBrands', updatedBrand, httpOptions);
  }
  public getBrandbyID(brandId: string): Observable<BrandModel> {
    return this.http.get<BrandModel>(this.urlApi+`Brands/GetBrandByID?ID=${brandId}`); 
  }
  public postBrand(newBrand: BrandModel): Observable<BrandModel> {
    return this.http.post<BrandModel>(this.urlApi + 'Brands/CreateBrand', newBrand);
  }
}
