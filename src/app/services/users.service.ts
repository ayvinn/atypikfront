import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constantURL } from '../shared/constantURL';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  readonly url: string = constantURL.apiEndpoint+'/api/Users';

  constructor(private http:HttpClient) { }

  
  getUsers(){
    return this.http.get(this.url+"/");
}

putUsersnoid(body) {
  return this.http.put(this.url+"/",{body});
}

getUsersid(id){
  return this.http.get(this.url+"/"+id);

}

putUsers(body) {
  return this.http.put(this.url+"/",{body});

}

deleteUsers(id) {
  return this.http.delete(this.url+"/Users/"+id);
}

getUsersprofile(){
  return this.http.get(this.url+"/profile");
}

getUsersbookings(){
  return this.http.get(this.url+"/bookings");
}
getUsersUnavailableSlots(){
  return this.http.get(this.url+"/unavailableSlots");
}
}