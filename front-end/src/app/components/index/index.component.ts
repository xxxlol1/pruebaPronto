import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService,Meeting} from '../../service/service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  ListMeeting: Meeting[] = [];


  constructor(private ServiceService:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.listMeeting();
  }
  listMeeting(){
    this.ServiceService.getMettings().subscribe(
      res => {
        console.log(res);
        this.ListMeeting = <any> res;
      },
      err => console.log(err)
    );
  }
}
