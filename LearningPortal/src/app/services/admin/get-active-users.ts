import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User, Users } from '../../types/user';

@Injectable({
  providedIn: 'root'
})
export class GetActiveUsers {

  constructor() { }

  http=inject(HttpClient)

  getUsers(page:number,limit:number){
    return this.http.get<Users>(`users?_page=${page}&_per_page=${limit}&status=active`)
  }
}
