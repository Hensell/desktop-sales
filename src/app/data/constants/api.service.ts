import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private urlApi = 'http://localhost:100/api/';

  constructor() { }

  public getApiUrl(): string {
    return this.urlApi;
  }
  
}
