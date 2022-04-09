import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  myGlobalVar = [];

  constructor(){
    this.myGlobalVar = [];
  }

  setMyGV(val: string,val2 :string){
    const b ={name:val,displayName:val2};
    this.myGlobalVar.push(b);
  }

  getMyGV(){
    return this.myGlobalVar;
  }
  clear(){
    this.myGlobalVar = [];
  }
}
