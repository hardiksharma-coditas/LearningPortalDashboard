import { Component, inject } from '@angular/core';
import { InputComponent } from "../../shared/input/input";
import { CustomButton } from "../../shared/custom-button/custom-button";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/authentication/auth-service';
import { User } from '../../types/user';
import { ToastService } from '../../services/toast/toast-service';
import { validateFunc } from '../../validator';
import { Router } from '@angular/router';
import { Modal } from "../../shared/modal/modal";

@Component({
  selector: 'app-login',
  imports: [InputComponent, CustomButton, ReactiveFormsModule, Modal],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  router = inject(Router)
  loginService = inject(AuthService)
  toastService = inject(ToastService)

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
  })
  validateForm = validateFunc(this.loginForm)

  onLogin() {
    console.log(this.loginForm.value)

    if (this.loginForm.valid) {
      this.loginService.authenticateUser(this.loginForm).subscribe({
        next: (user: User[]) => {
          const token = user[0].token;
          const role = user[0].role;
          //  console.log(user)
          //  console.log(token,role)

          localStorage.setItem('token', token)
          localStorage.setItem('role', role)

          if (role === 'admin') {
            this.router.navigateByUrl('/admin')
          }
          else if (role === 'instructor') {
            this.router.navigateByUrl('/instructor')
          }
          else if (role === 'student') {
            this.router.navigateByUrl('/student')
          }

          this.toastService.addMessage({ message: "Logged In Successfully!", duration: 1500, type: 'success' })
        },
        error: (error) => {
          this.toastService.addMessage({ message: `There is an error: ${error}`, duration: 1500, type: 'error' })
        }
      })
    }
    else {
      alert("This form is invalid")
    }
  }
}
