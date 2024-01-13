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

export class AuthGuardEstudianteNoLogueado implements CanActivate {
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.afAuth.authState.pipe(
      take(1),
      map(user => !!user),
      map(loggedIn => {
        if (loggedIn) {
          // Si el usuario ya está autenticado, redirige a la página que desees (por ejemplo, la página principal).
          return this.router.createUrlTree(['/inicioa']);
        }
        return true;
      })
    );
  }
}