import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const authGuardGuard: CanActivateFn = (route, state) => {

  const authToken=localStorage.getItem('token')
  const router=inject(Router)
  
  if(authToken){
  return true;
  }

  else{
    router.navigateByUrl('/login')
   return false
  }
};
