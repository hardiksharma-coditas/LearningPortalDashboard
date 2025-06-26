import { Component, EventEmitter, inject, input, Output } from '@angular/core';
import { DeleteUSerService } from '../../services/admin/delete-user-service';
import { EditDeletepermitAdmin } from '../../directives/edit-deletepermit-admin';

@Component({
  selector: 'app-user-card',
  imports: [EditDeletepermitAdmin],
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss'
})
export class UserCard {
 
  @Output() onedit=new EventEmitter();

  deleteUserService=inject(DeleteUSerService)

  name=input.required<string>()
  role=input.required<'admin'|'student'|'instructor'>()
  email=input.required<string>()
  id=input.required<string>()

  editUser(id:string){
   this.onedit.emit(id);
  }

  deleteUser(id:string){
  this.deleteUserService.deleteUser(id).subscribe({
    next:(data)=>{
      console.log(data)
    },
    error:(error)=>{
      console.log(error)
    }
  })
  }
}
