import { Component, inject } from '@angular/core';
import { ToastService } from '../../services/toast/toast-service';
import { Toast } from '../../types/toast';

@Component({
	selector: 'app-toast',
	imports: [],
	templateUrl: './toast.html',
})
export class ToastComponent  {
 
    toasts:Toast[]=[]
    message:string=''

    getToastService=inject(ToastService)
    
    setToast(){
        this.toasts=this.getToastService.getToasts()
        // this.message=this.toasts[0].message
    }
 }