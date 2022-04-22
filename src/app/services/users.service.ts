import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User/user';
import { constantURL } from '../shared/constantURL';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  readonly url: string = constantURL.apiEndpoint+'/api/Users';

  constructor(private http:HttpClient) { }

  
  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

putUsersnoid(id,body) {
  return this.http.put(this.url+"/"+id,body);
}

getUsersid(id){
  return this.http.get(this.url+"/"+id);

}

putUsers(body) {
  return this.http.put(this.url+"/",{body});

}

deleteUsers(id) {
  return this.http.delete(this.url+"/"+id);
}

getUsersprofile(){
  return this.http.get(this.url+"/profile");
}

getUsersbookings(param):Observable<any[]>{
  return this.http.get<any[]>(`${this.url}/bookings`,{params : param});
}
getUsersUnavailableSlots(){
  return this.http.get(this.url+"/unavailableSlots");
}
}