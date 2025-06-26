import { Directive, ElementRef, inject, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../services/authentication/auth-service';

@Directive({
  selector: '[addDirective]'
})
export class AddDirective implements OnInit{

  constructor() { }
  
  template=inject(TemplateRef)
  container=inject(ViewContainerRef)
  getRoleService=inject(AuthService)

  // @Input() addDirective:string='';
  role:string=''

  ngOnInit(): void {
    
    this.role=this.getRoleService.getRole()
    // console.log(this.role,"ROle")
    // console.log(localStorage.getItem('role'),"Role form service")
    if(this.role=='admin'){
      this.container.clear()
    }
    else{
      this.container.createEmbeddedView(this.template)
    }
  }
}
