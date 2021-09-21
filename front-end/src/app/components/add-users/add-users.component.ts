import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  UserServiceService,
  Usuario,
  UsuarioName,
} from 'src/app/service/user-service.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css'],
})
export class AddUsersComponent implements OnInit {
  user: Usuario = {
    name: '',
  };

  username: UsuarioName = {
    userId: '',
  };

  ListMeeting: Usuario[] = [];
  ListMeeting2: UsuarioName[] = [];

  constructor(
    private UserSerivce: UserServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.listUsers();
    const params = this.activatedRoute.snapshot.params;
  }

  agregarUser() {
    delete this.username.userId;
    this.UserSerivce.addUser(this.user).subscribe((res: any) => {
      this.listUsers();
    });
  }

  listUsers() {
    this.UserSerivce.getUser().subscribe(
      (res) => {
        this.ListMeeting = <any>res;
        this.ListMeeting2 = <any>res;
      },
      (err) => console.log(err)
    );
  }
  deleteUser(id: string) {
    this.UserSerivce.deleteUser(id).subscribe(
      (res) => {
        this.listUsers();
      },
      (err) => console.log(err)
    );
  }
}
