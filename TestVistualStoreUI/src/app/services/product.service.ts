import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  Url :string;

  constructor(private http: HttpClient) { 
    this.Url = 'https://localhost:5001/api/Product';
  }

  getProducts(): Observable<Product[]> {
    debugger;
    return this.http.get<Product[]>(this.Url);
  }

  getProduct(id): Observable<Product> {
    return this.http.get<Product>(this.Url+"/"+id);
  }

  postProduct(data): Observable<any> {
    return this.http.post(this.Url, data);
  }
  
  
  putProduct(id:number,formData){  
    return this.http.put(this.Url+"/"+id,formData);  
  }  
  deleteProduct(id){  
    return this.http.delete(this.Url+"/"+id);  
  }  
}
