import { Directive, ElementRef, inject, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[addDirective]'
})
export class AddDirective implements OnInit{

  constructor() { }
  
  template=inject(TemplateRef)
  container=inject(ViewContainerRef)

  @Input() addDirective:string='';

  ngOnInit(): void {
    if(this.addDirective!='admin'){
      this.container.createEmbeddedView(this.template)
    }
    else{
      this.container.clear()
    }
  }
}
