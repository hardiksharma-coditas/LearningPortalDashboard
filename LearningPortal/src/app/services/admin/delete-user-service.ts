import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteUSerService {

  constructor() { }

  http=inject(HttpClient)

  deleteUser(id:string){
    return this.http.delete<any>(`users/${id}`)
  }
}
