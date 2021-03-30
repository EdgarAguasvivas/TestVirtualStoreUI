import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders }    from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  Url :string;  

  constructor(private http: HttpClient) {
    this.Url = 'https://localhost:5001/api/User';
   }


  getUsers(): Observable<User[]> {
    debugger;
    return this.http.get<User[]>(this.Url);
  }

  getUser(id): Observable<User> {
    return this.http.get<User>(this.Url+"/"+id);
  }

  postUser(data): Observable<any> {
    return this.http.post(this.Url, data);
  }
  
  
  putUser(id:number,formData){  
    return this.http.put(this.Url+"/"+id,formData);  
  }  
  deleteUser(id){  
    return this.http.delete(this.Url+"/"+id);  
  }  
}
