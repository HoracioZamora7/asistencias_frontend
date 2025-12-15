import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

const checkSession = (): boolean =>{
  try {
    const cookieService = inject(CookieService);
    const token = cookieService.check('token');
    console.log('Guard ');
    return token;
    
  } catch (error) {
    console.log('token invalido ')
    return false;
  }
}

export const sessionGuard: CanActivateFn = (route, state) => {
  
  const isValidSession = checkSession();
  const router = inject(Router);
  if(!isValidSession){
    router.navigate(['/','auth']);
  }
  
  return isValidSession;
};
