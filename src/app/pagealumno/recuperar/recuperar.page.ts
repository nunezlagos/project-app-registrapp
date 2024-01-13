import { Component, OnInit } from '@angular/core';
import { AutentificacionService } from 'src/app/services/autentificacion.service';
import { Router } from '@angular/router';
;
@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  correo='';


  constructor ( private authService: AutentificacionService,
                private router: Router) { }

  ngOnInit() {
    console.log('Correo de recuperacion',this.correo);
  }

  recuperar(mail:string){
    this.authService.requestPassword(mail)
    console.log('Email Enviado a', mail)


  };

}
