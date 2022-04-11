import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constantURL } from '../shared/constantURL';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  readonly url: string = constantURL.apiEndpoint+'/api/Photos';

  constructor(private http:HttpClient) { }

  postPhotos(PhotosCreate){
    return this.http.post(this.url, PhotosCreate);
    
}

getPhotosAccommodations(id){
  return this.http.get(this.url+"/accommodations"+id);
}

getPhotos(id){
  return this.http.get(this.url+"/"+id);
}

putPhotos(id, putPhotos) {
  return this.http.put(this.url+"/"+id, putPhotos);
}
}