import { CustomField } from './../models/CustomField/custom-field';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constantURL } from '../shared/constantURL';
import { Observable } from 'rxjs';
import { CustomFieldCreate  } from './../models/CustomField/custom-field-create';
@Injectable({
  providedIn: 'root'
})
export class CustomFieldsService {
  readonly url: string = constantURL.apiEndpoint+'/api/CustomFields';

  constructor(private http:HttpClient) { }

  
  postCustomFields(CustomFieldsCreate){
    return this.http.post(this.url, CustomField);

}

  getCustomFields(){
    return this.http.get(this.url+"/");

  }
  getCustomField(id){
    return this.http.get(this.url+"/"+id);
}

putCustomField(id,customfieldUpdate) {
  return this.http.put(`${this.url}/${id}`, customfieldUpdate);
}

deleteCustomField(id) {
  return this.http.delete(this.url+"/CustomField/"+id);
}

postCustomField(CustomFieldCreate){
  return this.http.post(this.url, CustomFieldCreate);

}
getCustomFieldacommonadation(id,id2){
  return this.http.get(this.url+"/"+id+"/accommondation/"+id2);
}

}
