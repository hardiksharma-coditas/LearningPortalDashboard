import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteCourseService {

  constructor() { }

  http=inject(HttpClient)

  deleteCourse(id:string){
  return this.http.delete<any>(`courses/${id}`)
  }
}
