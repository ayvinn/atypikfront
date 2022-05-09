import { Injectable } from '@angular/core';
import { constantURL } from 'src/app/shared/constantURL';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User/user';

/*
 "@capacitor/android": "^3.5.1",
    "@capacitor/cli": "^3.5.1",
    "@capacitor/core": "^3.5.1",
*/

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly url: string = constantURL.apiEndpoint + '/api/authenticate';
  public users:User[];
  user:User;
  constructor(private http:HttpClient) {

  }
  authLogin(model): Observable<any> {
    return this.http.post<any>(`${this.url}/login`,model, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }
  register(model): Observable<any> {
    return this.http.post<any>(`${this.url}/register`,model, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }
  logout(): void {
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('jwt');
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
