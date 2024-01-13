import { Injectable, inject  } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { AutentificacionService } from '../services/autentificacion.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { take, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AuthGuardEstudiante implements CanActivate {
  constructor(private router: Router,
              private ServicioAutentificacion: AutentificacionService,
              private afAuth: AngularFireAuth ) {}

              canActivate(
                next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean | UrlTree> {
                return this.afAuth.authState.pipe(
                  take(1),
                  map(user => !!user),  // Transforma el estado de autenticación en un booleano
                  tap(loggedIn => {
                    if (!loggedIn) {
                      // Si el usuario no está autenticado, redirige a la página de inicio de sesión
                      this.router.navigate(['/logina']);
                    } 
                    

                  })
                );
              }
}

