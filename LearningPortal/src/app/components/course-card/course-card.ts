import { Component, EventEmitter, inject, input, Output } from '@angular/core';
import { CustomButton } from "../../shared/custom-button/custom-button";
import { PurchaseButtonPermit } from '../../directives/purchase-button-permit';
import { EditDeleteCoursePermit } from '../../directives/edit-delete-course-permit';
import { DeleteUSerService } from '../../services/admin/delete-user-service';
import { DeleteCourseService } from '../../services/instructor/delete-course-service';

@Component({
  selector: 'app-course-card',
  imports: [CustomButton,PurchaseButtonPermit,EditDeleteCoursePermit],
  templateUrl: './course-card.html',
  styleUrl: './course-card.scss'
})
export class CourseCard {

  @Output() onedit=new EventEmitter()

  deleteCourseService=inject(DeleteCourseService)

  name=input.required<string>()
  type=input.required<'paid'|'free'>()
  cost=input<string>('')
  instructor=input.required<string>()
  duration=input.required<string>()
  id=input.required<string>()



  editUser(id:string){
 this.onedit.emit(id)
  }

  deleteUser(id:string){
  this.deleteCourseService.deleteCourse(id).subscribe({
    next:(data)=>{
    console.log(data)
    },
    error:(error)=>{
      console.log(error)
    }
  })
  }
}
