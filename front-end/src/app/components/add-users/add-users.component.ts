import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  UserServiceService,
  Usuario,
} from 'src/app/service/user-service.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css'],
})
export class AddUsersComponent implements OnInit {
  user: Usuario = {
    //userId: '',
    name: '',
  };

  constructor(
    private UserSerivce: UserServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  agregarUser() {
    // delete this.user.userId;
    this.UserSerivce.addUser(this.user).subscribe((res: any) => {
      console.log(res.status);
    });
    //this.router.navigate(['/index']);
  }
}
