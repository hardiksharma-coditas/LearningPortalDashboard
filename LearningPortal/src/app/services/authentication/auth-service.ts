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
  user:{name:string,email:string,role:'admin'|'instructor'|'student'|''}={name:'',role:'',email:''}

  authenticateUser(form:FormGroup){
  const user=this.http.get<User[]>(`users?email=${form.value.email}&password=${form.value.password}`)
  return user?user:''
  }

  getRole(){
    const role=localStorage.getItem('role')||''

    return role
  }
}
