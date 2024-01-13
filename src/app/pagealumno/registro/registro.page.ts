import { Component, OnInit } from '@angular/core';
import { Asignaturas, Estudiante } from 'src/app/models/usuario';
import { FormsModule } from '@angular/forms';
import { AutentificacionService } from 'src/app/services/autentificacion.service';
import { FiresotreService } from 'src/app/services/firesotre.service';
import { InteraccionusuarioService } from 'src/app/services/interaccionusuario.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';




@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  //Se almacenan los datos del estudiantes obtenidos del registro y se dejan algunos blancos o nulos para editar despues
  datos:Estudiante={
    nombre: '',
    carrera: '',
    correo: '',
    uid: '',
    password: '',
    rol: 'Estudiante',
    direccion: '',
    genero: '',
    telefono: 0,
    rut: '',
    sede: 'Maipú',
    foto: '',
    fecha: new Date(),
    fecha2:'',
    hora:'',
    estado:''
  }

//Se almacenan los datos de las asignaturas.

  asignatura:Asignaturas={
    codigo:'',
    nombre:''
  }
//Aqui se define un arreglo en formato asignatura para guardar las asignaturas.
datosAsignaturas:Asignaturas[]=[];

  constructor(private authService: AutentificacionService,
              private firestore:FiresotreService,
              private interaction:InteraccionusuarioService,
              private router: Router,
              private fireStore: AngularFirestore) {}





  ngOnInit() {
    console.clear();
    
  }
  


async registrar() {
  this.interaction.showLoading('Registrando...');
  console.log('datos ->', this.datos);
  try {
    const respuesta = await this.authService.registrarUsuario(this.datos);
    
    if (respuesta) {
      console.log('Usuario creado exitosamente.');
      this.getAsignatura();
      const id = respuesta.user!.uid;
      this.datos.uid = id;
      //Blanquear contraseña
      this.datos.password='***********';
      // Crear el documento principal del estudiante en la colección 'Estudiantes'
      await this.firestore.crearDocumento(this.datos, 'Estudiantes', id);

      //Recorrer el arreglo de las asginaturas.
      this.datosAsignaturas.forEach((asignatura: any) => {
        //console.log(`Nombre: ${asignatura.nombre}, Código: ${asignatura.codigo}`);
        const asitencia=0;
        const carga = { nombre: asignatura.nombre, codigo:asignatura.codigo, asistencia:asitencia };
        // Crear subcolecciones para asignaturas del documento del estudiante
      this.crearSubcoleccion(this.datos.uid, 'Asignaturas',carga, asignatura.codigo);
      });

      

      this.interaction.presentToast('Registrado con éxito.');
      this.interaction.hideLoading();
      this.router.navigate(['/inicioa']);
    }
  } catch (error) {
    this.interaction.hideLoading();
    this.interaction.presentToast('Error al registrar usuario');
    console.log('Error de registro de usuario.', error);
  }
}

async crearSubcoleccion(idEstudiante: string, nombreSubcoleccion: string, datos: any, idAsignastura:string) {
  try {
    // Utiliza los datos proporcionados para crear la subcolección
    await this.firestore.crearDocumento(datos, `Estudiantes/${idEstudiante}/${nombreSubcoleccion}`,idAsignastura );
    console.log(`Subcolección '${nombreSubcoleccion}' creada para el estudiante con ID: ${idEstudiante}`);
  } catch (error) {
    console.error('Error al crear la subcolección:', error);
  }
}

getAsignatura() {
  const path='Asignaturas';
  this.firestore.getCollection<Asignaturas>(path).subscribe( respuesta => {
  //console.log('Asignaturas a inscribir ->', respuesta )
  this.datosAsignaturas=respuesta;
  //console.log(this.datosAsignaturas)
    });
    
  }
}

