import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.scss'
})
export class Modal {
  @Output() close=new EventEmitter()

  closeModal(){
  this.close.emit()
  }

  stopEvent(e:Event){
    e.stopPropagation()
  }
}
