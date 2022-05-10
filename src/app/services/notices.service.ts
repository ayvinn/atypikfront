import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constantURL } from '../shared/constantURL';

@Injectable({
  providedIn: 'root'
})
export class NoticesService {

  readonly url: string = constantURL.apiEndpoint+'/api/Notices';
  
  constructor(private http:HttpClient) { }

  
postNotices(NoticeCreate){
  return this.http.post(this.url, NoticeCreate);
}

getNotices(id){
  return this.http.get(this.url+"/accomdations"+id);
}

deleteNotices(id) {
  return this.http.delete(this.url+"/Notices/"+id);
}
}