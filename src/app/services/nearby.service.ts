import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constantURL } from '../shared/constantURL';

@Injectable({
  providedIn: 'root'
})
export class NearbyService {
  readonly url: string = constantURL.apiEndpoint+'/api/Nearby';

  constructor(private http:HttpClient) { }

  
postNearby(NearbyCreate){
  return this.http.post(this.url, NearbyCreate);
}

getNearbyaccomodations(id){
  return this.http.get(this.url+"/accomdations"+id);
}

getNearby(id){
  return this.http.get(this.url+"/"+id);
}

putNearby(id, putNearby) {
  return this.http.put(this.url+"/"+id,putNearby);
}

deleteNearby(id) {
  return this.http.delete(this.url+"/Nearby/"+id);
}
getNearbyComment(id){
  return this.http.get(this.url+"/"+id+"/comments/");
}
postNearbyComment(commentcreate){
  return this.http.post(this.url, commentcreate);
}
}