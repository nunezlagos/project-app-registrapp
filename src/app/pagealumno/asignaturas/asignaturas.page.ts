import { Component, OnInit } from '@angular/core';
import { Asignaturas, Estudiante } from 'src/app/models/usuario';
import { AutentificacionService } from 'src/app/services/autentificacion.service';
import { FiresotreService } from 'src/app/services/firesotre.service';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {

  mostarAsignaturas: Asignaturas[] = [];
  uid: string = '';

  constructor(private firestore:FiresotreService,
              private ServicioAutentificacion: AutentificacionService
                                                            ) { }

  ngOnInit() {
    console.clear();
    this.getInfoUsuario();
  }

    //Funcion para obtener los datos de todas las asignaturas.
    getInfoUsuario() {
      
      //Obtiene el estado del usuario y su uid.
      this.ServicioAutentificacion.getEstado().subscribe(respuesta => {
        if (respuesta) {
          //console.log('Id del estudiante ->', respuesta.uid);
          this.uid=respuesta.uid
          const path='Estudiantes/'+this.uid+ '/Asignaturas'
          //console.log('Ruta', path);
          this.firestore.getCollection<Asignaturas>(path).subscribe( respuesta => {
          console.log('Asignaturas Inscritas ->', respuesta )
          this.mostarAsignaturas=respuesta
          //console.log(this.mostarAsignaturas)
        });
        } 
      });
    }
  

}
