import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditCourseService{

  constructor() { }

  http=inject(HttpClient)

  editCourse(id:string,object:Object){
    return this.http.patch<any>(`courses/${id}`,object)
  }
}
