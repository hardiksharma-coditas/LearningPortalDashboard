import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../../types/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  http=inject(HttpClient)

  authenticateUser(form:FormGroup){
  return this.http.get<User[]>(`users?email=${form.value.email}&password=${form.value.password}`)
  }
}
