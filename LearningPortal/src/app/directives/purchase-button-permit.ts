import { Directive, inject, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../services/authentication/auth-service';

@Directive({
  selector: '[appPurchaseButtonPermit]'
})
export class PurchaseButtonPermit implements OnInit{

  constructor() { }

  templateRef=inject(TemplateRef)
  viewContainerRef=inject(ViewContainerRef)
  authService=inject(AuthService)
  
  ngOnInit(): void {
  const role:string=this.authService.getRole()
  
  if(role=='student'){
    this.viewContainerRef.createEmbeddedView(this.templateRef)
  }
  else{
    this.viewContainerRef.clear()
  }
  }

}
