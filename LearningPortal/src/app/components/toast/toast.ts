import { Component, inject, OnInit } from '@angular/core';
import { ToastService } from '../../services/toast/toast-service';
import { Toast } from '../../types/toast';

@Component({
  selector: 'app-toast',
  imports: [],
  templateUrl: './toast.html',
  styleUrl: './toast.scss'
})
export class ToastComponent implements OnInit{
   
  toasts:Toast[]=[]
  toastService=inject(ToastService)

  ngOnInit(): void {
    this.toasts=this.toastService.getToasts()
    console.log(this.toasts)
  }

}
