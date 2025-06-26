import { Component, inject } from '@angular/core';
import { InputComponent } from "../../../shared/input/input";
import { CustomButton } from "../../../shared/custom-button/custom-button";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { validateFunc } from '../../../validator';
import { AddUSerService } from '../../../services/admin/add-user-service';

@Component({
  selector: 'app-add-user-form',
  imports: [InputComponent, CustomButton,ReactiveFormsModule],
  templateUrl: './add-user-form.html',
  styleUrl: './add-user-form.scss'
})
export class AddUserForm {

  addUserService=inject(AddUSerService)

  addUserForm:FormGroup=new FormGroup({
  name:new FormControl('',[Validators.required,Validators.maxLength(25)]),
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required]),
  role:new FormControl('',[Validators.required])
  })

  validateUserForm=validateFunc(this.addUserForm)

  addUser(){

    if(this.addUserForm.valid){
    this.addUserService.addUser(this.addUserForm).subscribe({
      next:(data)=>{
        console.log(data)
      },
      error:(error)=>{
        console.log(error)
      }
    })
    }
    console.log(this.addUserForm.value)
  }

}
