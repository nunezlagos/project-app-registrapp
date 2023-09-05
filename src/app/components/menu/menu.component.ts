import { Component, OnInit } from '@angular/core';
 /*import { listarutasp } from 'src/app/models/lista_menu';*/
import { listarutase } from 'src/app/models/lista_menu';
import { listarutasl } from 'src/app/models/lista_menu';
import { MenuController } from '@ionic/angular';
import { AutentificacionService } from 'src/app/autentificacion.service';
import { Router } from '@angular/router'
import { Icon } from 'ionicons/dist/types/components/icon/icon';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {
  

/*
  public lista_rutas_profesor :listarutasp[] = [
   
    {name:'Inicio', ruta:'/iniciop',},
    {name:'Generar Qr', ruta:'/qr',},
    {name:'Asisencia',ruta:'/lista'},
    {name:'Secciones',ruta:'/seccion'}
  ]
*/

  public lista_rutas_estudiantes :listarutase[] = [
    /*ELEMENTOS DEL MENU CON SU RESPECTIVO RUTA*/
    {name:'Inicio', ruta:'/inicioa',icon:'home-outline'},
    {name:'Escanear Qr', ruta:'/qralumno',icon:'scan-outline',},
    {name:'Cursos',ruta:'/asignaturas',icon:'book-outline'},
   
  ]
  public lista_rutas_login: listarutasl []=[

    /*ELEMENTOS DEL MENU CON SU RESPECTIVO RUTA*/
    {name:'Inicio', ruta:'/inicio',icon:'home-outline'},
    {name:'Iniciar Sesion',ruta:'/logina',icon:'log-in-outline'},
    {name:'Registro Usuario', ruta:'/registro',icon:'person-add-outline'},
    {name:'Recuperar Contraseña',ruta:'/recuperar',icon:'medkit-outline'},
    
    
  ]
  

  constructor(private menu: MenuController,private ServicioAutentificacion: AutentificacionService, private router: Router) {}

  
  // Funciones para verificar el tipo de usuario
  

  isEstudiante(): boolean {
    return this.ServicioAutentificacion.isLoggedIn();
  }

   // Función para cerrar la sesión
  logout() {
    this.ServicioAutentificacion.logout();
    this.router.navigate(['/inicio']); // Cambia '/login' por la ruta deseada
  }


  openFirst() {
    // Habilita el menú con el nombre 'first' y luego lo abre
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    // Abre el menú con el nombre 'end'
    this.menu.open('end');
  }

  openCustom() {
    // Habilita el menú con el nombre 'custom' y luego lo abre
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }


  ngOnInit() {
    
  }

}

