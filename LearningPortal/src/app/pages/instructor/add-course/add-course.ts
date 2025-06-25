import { Component } from '@angular/core';
import { InputComponent } from "../../../shared/input/input";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { validateFunc } from '../../../validator';
import { CustomButton } from "../../../shared/custom-button/custom-button";

@Component({
  selector: 'app-add-course',
  imports: [InputComponent, ReactiveFormsModule, CustomButton],
  templateUrl: './add-course.html',
  styleUrl: './add-course.scss'
})
export class AddCourse {

  addCourseForm:FormGroup=new FormGroup({
    coursename:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]),
    instructorname:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]),
    type:new FormControl('',[Validators.required]),
    duration:new FormControl('',[Validators.required])
  })

  addCourse(){
    console.log(this.addCourseForm.value)
  }
}
