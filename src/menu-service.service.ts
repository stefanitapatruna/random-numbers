import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  constructor() { }

  storedData = true;
  scheme = false;
  results = false;


  showData(data:string) {
    if (data=="storedData"){
      this.storedData = true;
      this.scheme = false;
      this.results = false;
    }
    else if(data=="scheme") {
      this.storedData = false;
      this.scheme = true;
      this.results = false;
    }
    else if(data=="results"){ 
      this.storedData = false;
      this.scheme = false;
      this.results = true;
    }
    
  }



}
