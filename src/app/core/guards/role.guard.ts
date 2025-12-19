import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';

export const roleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const allowedRoles = route.data['roles'] as string[];

  const autorizado = verificarRol(allowedRoles);
  if (!autorizado) {
    router.navigate(['/','home']);
  }
  
  return autorizado;

};

const verificarRol = (allowedRoles: string[]): boolean => {
  try{
    const cookieSercvice = inject(CookieService);
    const token = cookieSercvice.get('token');

    const decoded : any = jwtDecode(token);
    const userRole: string[] = decoded.roles || [];

    return allowedRoles.some(role => userRole.includes(role)); 
    
  }
  catch(error){
    console.log('Error al verificar el rol:', error);
    return false;
  }
}