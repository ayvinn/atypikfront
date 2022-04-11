import { ChatCreate } from './../models/Chat/chat-create';
import { Injectable } from '@angular/core';
import { constantURL } from '../shared/constantURL';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {
  readonly url: string = constantURL.apiEndpoint+'/api/Chats';

  constructor(private http:HttpClient) { }

  postChats(ChatCreate){
    return this.http.post(this.url, ChatCreate);
  }
  
  getChat(id){
    return this.http.get(this.url+"/"+id);
}
 getChats(){
    return this.http.get(this.url);
 }
}
