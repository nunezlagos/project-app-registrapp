import { Component, OnInit } from '@angular/core';
 /*import { listarutasp } from 'src/app/models/lista_menu';*/
import { listarutase } from 'src/app/models/lista_menu';
import { listarutasl } from 'src/app/models/lista_menu';
import { MenuController } from '@ionic/angular';
import { AutentificacionService } from 'src/app/services/autentificacion.service';
import { Router } from '@angular/router'
import { Icon } from 'ionicons/dist/types/components/icon/icon';
import { InteraccionusuarioService } from 'src/app/services/interaccionusuario.service';
import { FiresotreService } from 'src/app/services/firesotre.service';
import { Estudiante } from 'src/app/models/usuario';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {
  isAuthenticated = false; // Variable para almacenar el estado de autenticación
  perfil: 'Estudiante' | 'admin' | 'Profesor'| null = null;
  nombre:string|null=null;
  foto:string | undefined;
  scanActive='ture';

  public lista_rutas_estudiantes :listarutase[] = [
    /*ELEMENTOS DEL MENU CON SU RESPECTIVO RUTA*/
    {name:'Inicio', ruta:'/inicioa',icon:'home-outline'},
    {name:'Escanear Qr', ruta:'/qr',icon:'scan-outline',},
    {name:'Cursos',ruta:'/asignaturas',icon:'book-outline'},
  ]
  public lista_rutas_login: listarutasl []=[

    /*ELEMENTOS DEL MENU CON SU RESPECTIVO RUTA*/
    {name:'Inicio', ruta:'/inicio',icon:'home-outline'},
    {name:'Iniciar Sesion',ruta:'/logina',icon:'log-in-outline'},
    {name:'Registro Usuario', ruta:'/registro',icon:'person-add-outline'},
    {name:'Recuperar Contraseña',ruta:'/recuperar',icon:'medkit-outline'},
  ]

  constructor(private menu: MenuController,
              private ServicioAutentificacion: AutentificacionService, 
              private router: Router,
              private interaccion:InteraccionusuarioService,
              private firestore:FiresotreService) {

                this.ServicioAutentificacion.getEstado().subscribe( respuesta => {
                  if (respuesta){
                    console.log('Esta logueado');
                    this.isAuthenticated=true;
                    this.getDatos(respuesta.uid)

                  }

                  else {
                    console.log('No esta logueado');
                    this.isAuthenticated=false;
                  }
                }

                )
              }

  ngOnInit() {
    
  }

  logout(){
    this.ServicioAutentificacion.logout();
    this.interaccion.presentToast('Sesión Finalizada.')
    console.clear();
    this.router.navigate(['/inicio']);

  }
  //Obtiene el rol del estudiante , nombre y se lo asigna a la variable perfil.
  getDatos( uid:string ) {
    const path='Estudiantes';
    const id=uid;
    this.firestore.getDocumento<Estudiante>(path,id).subscribe( respuesta => {
      //console.log('Datos ->', respuesta )
      if (respuesta){
        this.perfil=respuesta.rol
        this.nombre=respuesta.nombre
        this.foto=respuesta.foto
      }



    });



  }
}