import { Injectable, inject } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AutentificacionService } from './autentificacion.service';

/*
export const  AuthGuardEstudiante =() =>{

  const ServicioAutentificacion = inject(AutentificacionService );
  const router=inject(Router);
  
  if (ServicioAutentificacion.isEstudiante) {
    return true; // Usuario autenticado como profesor, permite el acceso
  } else {
    router.navigate(['/']);
    return false; // Usuario no autenticado como profesor, no permite el acceso
  }
}
*/

@Injectable({
  providedIn: 'root'
})


export class AuthGuardEstudiante implements CanActivate {
  constructor(private ServicioAutentificacion: AutentificacionService, private router: Router) {}

  canActivate(): boolean {
    if (this.ServicioAutentificacion.isLoggedIn()) {
      return true; // Estudiante autenticado, permite el acceso
    } else {
      this.router.navigate(['/inicioa']); // Redirige a la página de inicio de sesión si no está autenticado
      return false; // No permite el acceso
    }
  }
}