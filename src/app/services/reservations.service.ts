import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constantURL } from '../shared/constantURL';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {
  readonly url: string = constantURL.apiEndpoint+'/api/Reservations';
  constructor(private http:HttpClient) { }


  getReservationUserForthcoming(){
    return this.http.get(this.url+"/ReservationUserForthcoming");
  }

  
  getReservationUserHistory(){
    return this.http.get(this.url+"/ReservationUserHistory");
}

getReservationAccommodation(id){
  return this.http.get(this.url+"/ReservationAccommodationForthcoming"+id);
}

getReservationAccommodationHistory(id){
  return this.http.get(this.url+"/ReservationAccommodationHistory"+id);
}
putReservations(id, putReservations) {
  return this.http.put(this.url+"/"+id, putReservations);
}

postReservations(ReservationsCreate){
  return this.http.post(this.url, ReservationsCreate);
}
}