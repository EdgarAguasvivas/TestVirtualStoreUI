import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import {HttpHeaders} from '@angular/common/http';  
import { Login } from '../models/login';
import { Registration } from '../models/registration';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  Url :string;  
  token : string;  
  header : any;

  constructor(private http : HttpClient) { 
    this.Url = 'https://localhost:5001/api/Account';
    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings);  
  }

  Login(login : any): Observable<any> {  
     var a =this.Url+'UserLogin';  
   return this.http.post<any>(this.Url+'/PostLogin',login,{ headers: this.header});  
  }  

   CreateUser(register:Registration)  
   {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    return this.http.post<Registration[]>(this.Url + '/PostRegistration/', register, httpOptions)  
   }  
}
