import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Courses } from '../../types/course';

@Injectable({
  providedIn: 'root'
})
export class GetCoursesService {

  constructor() { }

  http=inject(HttpClient)

  getCourses(page:number,limit:number){
    return this.http.get<Courses>(`courses?_page=${page}&_per_page=${limit}`)
  }
}
