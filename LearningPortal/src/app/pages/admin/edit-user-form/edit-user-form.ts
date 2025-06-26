import { Component, inject, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { validateFunc } from '../../../validator';
import { CustomButton } from "../../../shared/custom-button/custom-button";
import { EditUSerService } from '../../../services/admin/edit-user-service';
import { InputComponent } from "../../../shared/input/input";

@Component({
  selector: 'app-edit-user-form',
  imports: [CustomButton, InputComponent,ReactiveFormsModule],
  templateUrl: './edit-user-form.html',
  styleUrl: './edit-user-form.scss'
})
export class EditUserForm {

  id=input.required<string>()

  editUserService=inject(EditUSerService)

  editUserForm:FormGroup=new FormGroup({
  name:new FormControl('',[Validators.maxLength(25)]),
  email:new FormControl('',[Validators.email]),
  password:new FormControl(''),
  role:new FormControl('')
  })

  validateUserForm=validateFunc(this.editUserForm)

  editUser(){

    const newUser:any={}
     
    if(this.editUserForm.valid){
    Object.keys(this.editUserForm.value).forEach(key=>{
      if(this.editUserForm.value[key]){
        newUser[key]=this.editUserForm.value[key]
      }
    })

    this.editUserService.editUser(this.id(),newUser).subscribe({
      next:(data)=>{
        console.log(data,"Edited")
      },
      error:(error)=>{
        console.log(error)
      }
    })
    }

    console.log(newUser,"New USer")
    // console.log(this.editUserForm.value)
  }

}
