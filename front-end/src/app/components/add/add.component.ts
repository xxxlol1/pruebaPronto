import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  ServiceService,
  Meeting,
  Meeting2,
  User,
} from '../../service/service.service';
import {
  UserServiceService,
  Usuario,
} from '../../service/user-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  meeting: Meeting = {
    meetingId: 0,
    meetingTime: '',
    freeTime: '',
    userId: '0',
  };

  meeting2: Meeting2 = {
    meetingId: '',
    name: '',
  };

  user: User = {
    userId: 0,
    name: '',
    meetingTime: '',
  };

  ListMeeting3: Meeting[] = [];

  constructor(
    private userService: UserServiceService,
    private ServiceService: ServiceService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.userService.getUserId(params.userId).subscribe((data: any) => {
        this.user = data;
        this.listMeetingId(params.userId);
      });
    });
  }

  getTime(time: any) {
    if (time.value !== '') {
      var hours = time.split(':')[0];
      var minutes = time.split(':')[1];
      var displayTime = [hours, minutes, '00'];
      return displayTime;
    }
    return ['00', '00', '00'];
  }

  getFreeTime(freeT: any) {
    var hours = freeT.getHours();
    var minutes = freeT.getMinutes();
    var time = hours + ':' + minutes;
    return time;
  }

  agregarMeeting(id: string) {
    // Opciones para obtener el horario y la hora en la que se desocupa
    var timeAux = this.getTime(this.meeting.meetingTime);
    var meetingT = new Date();
    meetingT.setHours(timeAux[0]);
    meetingT.setMinutes(timeAux[1]);
    meetingT.setMilliseconds(timeAux[2]);
    var freeT = new Date(meetingT.getTime() + 30 * 60000);
    // Preparo la data
    delete this.meeting.meetingId;
    this.meeting.freeTime = this.getFreeTime(freeT);
    this.meeting.userId = '' + this.user.userId;
    // Agregas la Data a la base de Datos
    this.ServiceService.addMeeting(this.meeting).subscribe(
      (resp) => {
        this.listMeetingId('' + this.user.userId);
      },
      (err) => {
        console.log('error', err);
      }
    );
  }

  listMeetingId(id: string) {
    this.ServiceService.getMeetingId(id).subscribe(
      (res) => {
        console.log(res);

        this.ListMeeting3 = <any>res;
      },
      (err) => console.log(err)
    );
  }

  eliminarMeeting(event: any) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var idMeeting = idAttr.nodeValue;
    this.ServiceService.deleteMeeting('' + idMeeting).subscribe(
      (res) => {
        this.listMeetingId('' + this.user.userId);
      },
      (err) => {
        console.log('error', err);
      }
    );
  }
}
