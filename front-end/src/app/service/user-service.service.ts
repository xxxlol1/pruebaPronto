import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  url = '/api';
  constructor(private http: HttpClient) {}

  //Get Users
  getUser() {
    return this.http.get(this.url);
  }
  //Get meetings by id
  getUserId(id: string) {
    return this.http.get(this.url + '/' + id);
  }
  //Adding usuarios
  addUser(user: Usuario) {
    return this.http.post(this.url + '/agregarusuario', user);
  }

  //Deleting User
  deleteUser(id: string) {
    return this.http.delete(this.url + '/' + id);
  }
}

export interface Usuario {
  name?: string;
  //userId?: string,
}
