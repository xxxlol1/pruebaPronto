import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../service/service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private ServiceService:ServiceService) { }

  ngOnInit(): void {
  }


  
}
