import { Component, OnInit } from '@angular/core';
import {ServiceService,Meeting} from '../../service/service.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

 // ListMeeting: Meeting[] = [];

  constructor(private ServiceService:ServiceService, private router:Router) { }

  ngOnInit(): void {
   // this.listMeeting();
   
  }
/*
  listMeeting(){
    this.ServiceService.getMettings().subscribe(
      res => {
        console.log(res);
        this.ListMeeting = <any> res;
      },
      err => console.log(err)
    );
  }
  */
}
