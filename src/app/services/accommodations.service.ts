import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { constantURL } from 'src/app/shared/constantURL';
import { AccommodationCreate } from '../models/Accommodation/accommodation-create';
import { AccomodationUpdate } from '../models/Accommodation/accomodation-update';
import { CommentCreate } from '../models/Comment/comment-create';

@Injectable({
  providedIn: 'root'
})
export class AccommodationsService {

  readonly url: string = constantURL.apiEndpoint+'/api/Accommodations';
  accommodationcreate:AccommodationCreate;
  accommodationUpdate:AccomodationUpdate;
  commentcreate:CommentCreate;
  constructor(private http:HttpClient) { }

  postAccommodation(accommodationcreate){
    return this.http.post(this.url, accommodationcreate);
  }
  getAccommodations(param): Observable<any[]>{
    return this.http.get<any[]>(this.url,{params : param});
  }
  getAccommodationstovalidate(): Observable<any[]>{
    return this.http.get<any[]>(`${this.url}/to-validate`);
  }
  getAccommodationsAll(param): Observable<any[]>{
    return this.http.get<any[]>(`${this.url}/all`,{params : param});
  }
  getAccommodationsStars(): Observable<any[]>{
    return this.http.get<any[]>(`${this.url}/stars`);
  }
  getAccommodation(id){
    return this.http.get(this.url+"/"+id);
  }
  putAcommodation(id,accommodationUpdate) {
    return this.http.put(`${this.url}/${id}`, accommodationUpdate);
  }
  deleteAcommodation(id) {
    return this.http.delete(this.url+"/"+id);
  }
  getAccommodationHost(id){
    return this.http.get(this.url+"/"+id+"/host");
  }
  getAccommodationsHosts(): Observable<any[]>{
    return this.http.get<any[]>(this.url+"/host");
  }
  getAccommodationBooking(id){
    return this.http.get(this.url+"/"+id+"/bookings");
  }
  getAccommodationBookingsToValidate(id): Observable<any[]>{
    return this.http.get<any[]>(this.url+"/"+id+"/bookings/to-validate");
  }
  getAccommodationBookingsParameters(id){
    return this.http.get(this.url+"/"+id+"/parameters");
  }
  getAccommodationBookingsComments(id,param){
    return this.http.get(this.url+"/"+id+"/parameters",{params:param});
  }
  getAccommodationComentsphotos(id){
    return this.http.get(this.url+"/"+id+"/comments/photos");
  }
  getAccommodationActivities(id){
    return this.http.get(this.url+"/"+id+"/activities");
  }
  deleteAcommodationComment(id) {
    return this.http.delete(this.url+"/comments/"+id);
  }
  postAccommodationComment(commentcreate){
    return this.http.post(this.url, commentcreate);
  }

}
