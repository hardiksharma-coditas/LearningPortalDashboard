import { Component, inject } from '@angular/core';
import { InputComponent } from "../../../shared/input/input";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { validateFunc } from '../../../validator';
import { CustomButton } from "../../../shared/custom-button/custom-button";
import { AddCourseService } from '../../../services/instructor/add-course-service';

@Component({
  selector: 'app-add-course',
  imports: [InputComponent, ReactiveFormsModule, CustomButton],
  templateUrl: './add-course.html',
  styleUrl: './add-course.scss'
})
export class AddCourse {

  addCourseService=inject(AddCourseService)

  addCourseForm:FormGroup=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.maxLength(20)]),
    instructor:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]),
    type:new FormControl('',[Validators.required]),
    duration:new FormControl('',[Validators.required]),
    cost:new FormControl('')
  })
  validateCourse=validateFunc(this.addCourseForm)

  addCourse(){
    console.log(this.addCourseForm.value)
    
    if(this.addCourseForm.valid){
    this.addCourseService.addCourse(this.addCourseForm).subscribe({
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
