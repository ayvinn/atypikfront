import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constantURL } from '../shared/constantURL';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {
  readonly url: string = constantURL.apiEndpoint+'/api/Options';

  constructor(private http:HttpClient) { }


  
postOptions(OptionsCreate){
  return this.http.post(this.url, OptionsCreate);
}

getOptionsAccommodations(id){
  return this.http.get(this.url+"/accommodations"+id);
}

getOptions(id){
  return this.http.get(this.url+"/"+id);
}

putOptions(id, putOptions) {
  return this.http.put(this.url+"/"+id, putOptions);
}

deleteOptions(id) {
  return this.http.delete(this.url+"/Options/"+id);
}
}