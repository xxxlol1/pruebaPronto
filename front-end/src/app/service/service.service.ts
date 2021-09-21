import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url = '/api';
  constructor(private http: HttpClient) { }

  //Get meetings
  getMettings() {
    return this.http.get(this.url);
  }

  //Get meetings by id
  getMeetingId(id: string) {
    return this.http.get(this.url + '/' + id);
  }

  //Deleting Meetings
  deleteMeeting(id: string) {
    return this.http.delete(this.url + '/listmeeting/' + id);
  }
  //Adding Meetings
  addMeeting(meeting: Meeting) {
    console.log(meeting);
    return this.http.post(this.url + '/agregar' , meeting);
  }

  //List of available
  getMeetingAvailable(available: any, finish: any) {
    return this.http.post(this.url, available, finish);
  }


}
export interface Meeting {
  meetingTime?: string,
  userId?: string,
}

export interface Meeting2{
  meetingId?: string,
  name?: string,
  meetingTime?: string
}

export interface User{
  userId: number,
  name?: string,
  meetingTime?:string
}