import { Injectable } from '@angular/core';
import { Toast } from '../../types/toast';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  toasts:Toast[]=[]
  delay:number=0

  addMessage(msg:Toast){
    // if(this.toasts[0]){

    //   setTimeout(()=>{
    //     this.toasts.push(msg)

    //     setTimeout(()=>this.toasts.pop(),msg.duration)
    //   },this.delay+1000)
    // }
    // else{
    // this.toasts.push(msg)
    // this.delay=msg.duration

    // setTimeout(()=>this.toasts.pop(),this.delay)
    // }

    this.toasts.push(msg)
    this.delay=msg.duration

    setTimeout(()=>this.toasts.pop(),this.delay)
  }

  getToasts(){
    return this.toasts
  }
}
