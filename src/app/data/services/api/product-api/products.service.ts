import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '@shared/models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private urlApi = 'http://localhost:100/api/';



  constructor(private http: HttpClient) { }

  public get(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.urlApi+'Products/Get'); 
  }

  public post(newProduct: ProductModel): Observable<ProductModel> {
    return this.http.post<ProductModel>(this.urlApi + 'Products/Create', newProduct);
  }
  public put(updatedProduct: ProductModel): Observable<ProductModel> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<ProductModel>(this.urlApi + 'Products/Update', updatedProduct, httpOptions);
  }

  public getByID(productId: string): Observable<ProductModel> {
    return this.http.get<ProductModel>(this.urlApi+`Products/GetByID?ID=${productId}`); 
  }
}
