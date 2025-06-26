import { Component, inject, input } from '@angular/core';
import { CustomButton } from "../../../shared/custom-button/custom-button";
import { InputComponent } from "../../../shared/input/input";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { validateFunc } from '../../../validator';
import { EditCourseService } from '../../../services/instructor/edit-course-form';

@Component({
  selector: 'app-edit-course-form',
  imports: [CustomButton, InputComponent,ReactiveFormsModule],
  templateUrl: './edit-course-form.html',
  styleUrl: './edit-course-form.scss'
})
export class EditCourseForm {

   editCourseService=inject(EditCourseService)

   id=input.required<string>()

  editCourseForm:FormGroup=new FormGroup({
    name:new FormControl('',[Validators.maxLength(20)]),
    instructor:new FormControl('',[Validators.minLength(6),Validators.maxLength(20)]),
    type:new FormControl(''),
    duration:new FormControl(''),
    cost:new FormControl('')
  })
  validateEditCourse=validateFunc(this.editCourseForm)

  editCourse(){
    console.log(this.editCourseForm.value)
    
     const newCourse:any={}
     
    if(this.editCourseForm.valid){
    Object.keys(this.editCourseForm.value).forEach(key=>{
      if(this.editCourseForm.value[key]){
        newCourse[key]=this.editCourseForm.value[key]
      }
    })

    this.editCourseService.editCourse(this.id(),newCourse).subscribe({
      next:(data)=>{
        console.log(data)
      },
      error:(error)=>{
        console.log(error)
      }
    })
    }

    else{
      alert("Invalid Form")
    }

  }
}
