import { Injectable } from '@angular/core';
import { constantURL } from 'src/app/shared/constantURL';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly url: string = constantURL.apiEndpoint + '/api/users';
  public users:User[];
  user:User;
  constructor(private http:HttpClient) {

  }
  authLogin(model): Observable<User> {
    return this.http.post<User>(`${this.url}/login`, model, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  logout(): void {
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('token');
  } 
  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

  getAllUsers2(){

    this.http.get(this.url).toPromise().then(
      res=>{
        this.users = res as User[];
      }
    )
  }

  postUser(formData) {
    return this.http.post<any>(`${this.url}`, formData)
  }

  put(id,data) {
    return this.http.put(`${this.url}/${id}`, data);
  }

  deleteUsers(id){
    return this.http.delete(this.url+"/"+id);
  }
}
