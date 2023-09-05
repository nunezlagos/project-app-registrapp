import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from 'src/app/autentificacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginalumno',
  templateUrl: './loginalumno.page.html',
  styleUrls: ['./loginalumno.page.scss'],
})
export class LoginalumnoPage implements OnInit {

  username: string = '';
  password: string = '';


  constructor(private authService: AutentificacionService, private router: Router) {}

  login() {
    const isLogged = this.authService.login(this.username, this.password);
    if (isLogged) {
      // Inicio de sesión exitoso, redirige a la página principal de estudiantes
      this.router.navigate(['/inicioa']);
    } else {
      // Inicio de sesión fallido, muestra un mensaje de error o realiza otra acción
    }
  }


  ngOnInit() {
    console.log('InicioPage initialized');
  
  }

}
