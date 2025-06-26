import { Directive, inject, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../services/authentication/auth-service';

@Directive({
  selector: '[appEditDeletepermitAdmin]'
})
export class EditDeletepermitAdmin implements OnInit {

  constructor() { }

  template=inject(TemplateRef)
  container=inject(ViewContainerRef)
  getRoleService=inject(AuthService)

  role:string=''

  ngOnInit(): void {
    this.role=this.getRoleService.getRole()

    if(this.role=='admin'){
      this.container.createEmbeddedView(this.template)
    }
    else{
       this.container.clear()
    }
  }

}
