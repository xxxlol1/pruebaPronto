import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  url = '/api2';
  constructor(private http: HttpClient) {}

  //Get Users
  getUser() {
    return this.http.get(this.url + '/usuarios');
  }
  //Get meetings by id
  getUserId(id: string) {
    return this.http.get(this.url + '/usuarios/' + id);
  }
  //Adding usuarios
  addUser(user: Usuario) {

    return this.http.post(this.url + '/agregarusuario', user);

  }
  //Deleting User
  deleteUser(id: string) {
    return this.http.delete(this.url + '/usuario/' + id);
  }
}

export interface Usuario {
  name?: string;
}

export interface UsuarioName{
  userId?: string,
  name?: string;
}
