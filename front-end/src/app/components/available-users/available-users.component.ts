import { Component, OnInit } from '@angular/core';

import {
  ServiceService,
  Availables,
  User,
} from '../../service/service.service';
@Component({
  selector: 'app-available-users',
  templateUrl: './available-users.component.html',
  styleUrls: ['./available-users.component.css'],
})
export class AvailableUsersComponent implements OnInit {
  constructor(private ServiceService: ServiceService) {}
  ngOnInit(): void {}


  available: Availables = {
    start : '',
    end : ''
  }

  user: User = {
    userId: 0,
    name: '',
  };
  ListMeeting: User[] = [];


  getTime(time: any) {
    if (time.value !== '') {
      var hours = time.split(':')[0];
      var minutes = time.split(':')[1];
      var displayTime = [hours, minutes, '00'];
      return displayTime;
    }
    return ['00', '00', '00'];
  }

  getAvailableUsers() {

    this.ServiceService.getMeetingAvailable(this.available).subscribe(
      res => {
        this.ListMeeting = <any>res;
        console.log("meetings: ",this.ListMeeting);
      },
      err => {
        console.log("error");
      }  
    )
    console.log("entre");
  }
}
