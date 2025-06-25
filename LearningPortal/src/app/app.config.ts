import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpHandlerFn, HttpRequest, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl:string='http://localhost:3000/'

function cloneInterceptor(req:HttpRequest<unknown>,next:HttpHandlerFn):Observable<any>{

  const authToken = localStorage.getItem('token');

  req = req.clone({
    url: baseUrl+ req.url,
  })
  return next(req)
}

function authInterceptor(req:HttpRequest<unknown>,next:HttpHandlerFn):Observable<any>{

  const token=localStorage.getItem('token')

  if(token){
    req=req.clone({
      headers:req.headers.set('Authorization',`Bearer ${token}`)
    })
  }
  return next(req)
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(
      withFetch(),
      withInterceptors([cloneInterceptor,authInterceptor])
    )
  ]
};
