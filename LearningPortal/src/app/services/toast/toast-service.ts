import { Injectable, signal, TemplateRef } from '@angular/core';

 export interface Toast {
 	message:string,
    duration:number,
    type:'info'|'warn'|'success'|'error'
 }

 @Injectable({ providedIn: 'root' })
  export class ToastService {

    toasts:Toast[]=[]

    addToast(msg:Toast){

        this.toasts.push(msg)

        setTimeout(() => {
           this.toasts.pop() 
        }, msg.duration);
    }

    getToasts(){
        return this.toasts;
    }

 }