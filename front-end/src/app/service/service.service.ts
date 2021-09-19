import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url ="/api";
  constructor(private http: HttpClient) { }

  //Get meetings
  getMettings(){
    return this.http.get(this.url);
  }
  
}
