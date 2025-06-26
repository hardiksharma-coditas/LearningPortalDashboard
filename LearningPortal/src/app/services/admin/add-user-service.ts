import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AddUSerService {

  constructor() { }

  http=inject(HttpClient)

  addUser(formGroup:FormGroup){
  return this.http.post<any>('users',formGroup.value)
  }
}
