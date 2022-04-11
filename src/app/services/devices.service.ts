import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constantURL } from '../shared/constantURL';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  readonly url: string = constantURL.apiEndpoint+'/api/Devices';

  constructor(private http:HttpClient) { }

  getDevices(){
    return this.http.get(this.url+"/");
}

postDevices(DevicesCreate){
  return this.http.post(this.url, DevicesCreate);
}

putDevices(id,putdevice) {
  return this.http.put(this.url+"/"+id,putdevice);
}

deleteDevice(id) {
  return this.http.delete(this.url+"/Device/"+id);
}
}