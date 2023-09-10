import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../../../shared/models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private urlApi = 'http://localhost:100/api/';



  constructor(private http: HttpClient) { }

  public getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.urlApi+'Products/GetProducts'); 
  }

  public postProduct(newProduct: ProductModel): Observable<ProductModel> {
    return this.http.post<ProductModel>(this.urlApi + 'Products/CreateProducts', newProduct);
  }
  public putProduct(updatedProduct: ProductModel): Observable<ProductModel> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<ProductModel>(this.urlApi + 'Products/UpdateProducts', updatedProduct, httpOptions);
  }

  public getProductbyID(productId: string): Observable<ProductModel> {
    return this.http.get<ProductModel>(this.urlApi+`Products/GetProductsbyID?ID=${productId}`); 
  }
}
