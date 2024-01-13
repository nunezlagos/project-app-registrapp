import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from 'src/app/services/autentificacion.service';
import { Router } from '@angular/router';
import { InteraccionusuarioService } from 'src/app/services/interaccionusuario.service';



@Component({
  selector: 'app-loginalumno',
  templateUrl: './loginalumno.page.html',
  styleUrls: ['./loginalumno.page.scss'],
})
export class LoginalumnoPage implements OnInit {
  
  credenciales = {
    username: '',
    password: ''
  };
  
  constructor(private authService: AutentificacionService, private router: Router, private interaccion:InteraccionusuarioService ) {}

  ngOnInit() {
    console.log('Login Alumno Page')
    
  }
  
  async login() {
    await this.interaccion.showLoading('Ingresando...')
    console.log('credenciales ->', this.credenciales);
    //Capturar la promesa y el error debido.
    const respuesta = await this.authService.login(this.credenciales.username, this.credenciales.password).catch( error => {
      console.log('Error de inicio de sesion');
      this.interaccion.hideLoading();
      this.interaccion.presentToast('Credenciales Incorrectas.')
    });
    if (respuesta) {
      console.log('respuesta ->',respuesta);
      this.interaccion.hideLoading();
      this.interaccion.presentToast('Ingresado Correctamente');
      this.router.navigate(['/inicioa']);
    }
  }
}



    
    







