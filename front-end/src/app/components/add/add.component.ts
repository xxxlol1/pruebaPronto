import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService, Meeting, Meeting2 } from '../../service/service.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
  meeting: Meeting={
    meetingTime: '',
    userId: ''

  }


  meeting2: Meeting2={
    meetingId: '',
    name: ''
  
  }


  constructor(private ServiceService:ServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  agregarMeeting(){
    delete this.meeting.userId;

    this.ServiceService.addMeeting(this.meeting).subscribe();
    this.router.navigate(['/index']);

  }

}
