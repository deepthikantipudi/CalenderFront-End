import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  
  url= 'http://localhost:8081'
  constructor(private http: HttpClient) { }
  get(){
    return this.http.get<any>(this.url + '/api/events/1');
  }

}
