import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Users } from '../../types/user';

@Injectable({
  providedIn: 'root'
})
export class GetStudents {

  constructor() { }

  http=inject(HttpClient)

  getStudents(page:number,limit:number){
    return this.http.get<Users>(`users?_page=${page}&limit=${limit}&role=student`)
  }
}

