import { Directive, inject, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../services/authentication/auth-service';

@Directive({
  selector: '[appEditDeleteCoursePermit]'
})
export class EditDeleteCoursePermit {

  constructor() { }

  template=inject(TemplateRef)
  container=inject(ViewContainerRef)
  getRoleService=inject(AuthService)

  role:string=''

  ngOnInit(): void {
    this.role=this.getRoleService.getRole()

    if(this.role=='instructor'){
      this.container.createEmbeddedView(this.template)
    }
    else{
       this.container.clear()
    }
  }

}
