import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EditUSerService {

  constructor() { }

  http=inject(HttpClient)

  editUser(id:string,object:Object){
  return this.http.patch<any>(`users/${id}`,object)
  }
}
