import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AddCourseService {

  constructor() { }

  http=inject(HttpClient)

  addCourse(formGroup:FormGroup){
    return this.http.post<any>('courses',formGroup.value)
  }
}
