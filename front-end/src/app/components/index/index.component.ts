import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ServiceService,
  Meeting,
  Meeting2,
} from '../../service/service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  ListMeeting: Meeting[] = [];
  ListMeeting2: Meeting2[] = [];

  constructor(private ServiceService: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.listMeeting();
  }
  listMeeting() {
    this.ServiceService.getMettings().subscribe(
      (res) => {
        console.log(res);
        this.ListMeeting = <any>res;
        this.ListMeeting2 = <any>res;
      },
      (err) => console.log(err)
    );
  }

  listMeetingId(id: string) {
    this.ServiceService.getMeetingId(id).subscribe(
      (res) => {
        this.listMeeting();
      },
      (err) => console.log(err)
    );
  }

  deleteMeeting(id: string) {
    this.ServiceService.deleteMeeting(id).subscribe(
      (res) => {
        this.listMeeting();
      },
      (err) => console.log(err)
    );
  }
}
