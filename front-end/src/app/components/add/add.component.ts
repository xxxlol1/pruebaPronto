import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService, Meeting, Meeting2, User } from '../../service/service.service';
import { UserServiceService, Usuario } from "../../service/user-service.service";

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

  user: User={
    userId: 0,
    name: "",
    meetingTime: ""
  }

  ListMeeting: Meeting[] = [];
  ListMeeting2: Meeting2[] = [];
  ListMeeting3: User[] = [];
 

  constructor(private userService:UserServiceService ,private ServiceService:ServiceService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params =>{
      this.userService.getUserId(params.userId).subscribe((data:any) =>{
        this.user = data;
        this.listMeetingId(params.userId);
        
      })
    });
  }

  
  agregarMeeting(id:string){
    delete this.meeting.userId;
    this.ServiceService.addMeeting(this.meeting).subscribe();
    this.router.navigate(['/index']);

  }

  listMeetingId(id: string) {
    //console.log(id);
    this.ServiceService.getMeetingId(id).subscribe(
      res => {
       console.log(res)
       this.ListMeeting = <any>res;
       this.ListMeeting2 = <any>res;
       this.ListMeeting3 = <any>res;
       console.log(this.ListMeeting3);
      },
      err => console.log(err)
    )
  }

}
