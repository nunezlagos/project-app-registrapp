import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/models/usuario';
import { AutentificacionService } from 'src/app/services/autentificacion.service';
import { FiresotreService } from 'src/app/services/firesotre.service';

@Component({
  selector: 'app-inicioalumno',
  templateUrl: './inicioalumno.page.html',
  styleUrls: ['./inicioalumno.page.scss'],
})
export class InicioalumnoPage implements OnInit {



  datosEstudiantes: any[] = [];
  uid: string = '';

  constructor(private firestore:FiresotreService,
              private ServicioAutentificacion: AutentificacionService) { }



  ngOnInit() {
    console.clear();
    this.getInfoUsuario();

  }

  //Funcion para obtener los datos de todas las documentos.
  getInfoUsuario() {
    const path='Estudiantes';
    //Obtiene el estado del usuario y su uid.
    this.ServicioAutentificacion.getEstado().subscribe(respuesta => {
      if (respuesta) {
        //console.log('Id del estudiante ->', respuesta.uid);
        this.uid=respuesta.uid
        //console.log('Valor de uid:', this.uid);
        this.firestore.getDocumento<Estudiante>(path,this.uid).subscribe( respuesta => {
        console.log('Datos Leidos ->', respuesta )
        this.datosEstudiantes[0]=respuesta
        //console.log(this.datosEstudiantes)
      });
      } 
    });
  }

  



}
