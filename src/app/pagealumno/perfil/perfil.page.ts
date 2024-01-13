import { Component, OnInit, ViewChild, numberAttribute } from '@angular/core';
import { FiresotreService } from 'src/app/services/firesotre.service';
import { AutentificacionService } from 'src/app/services/autentificacion.service';
import { Estudiante } from 'src/app/models/usuario';
import { AlertController } from '@ionic/angular';
import { InteraccionusuarioService } from 'src/app/services/interaccionusuario.service';
import { FirestorageService } from 'src/app/services/firestorage.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  //Arreglo formato en modelo Estudiante
  datosEstudiantes:Estudiante[]=[];
  //Para obtener el Uid del estudiente y poder leer su coelccion e inform 
  uid: string = '';
  //Inicia valor dl segmento en vacio 
  valorSegmento='';
 //Variable imagen
  newImage='';
  
  

  constructor(private firestore:FiresotreService,
                private ServicioAutentificacion: AutentificacionService,
                private alertController: AlertController,
                private interaction:InteraccionusuarioService,
                private firestorage:FirestorageService) { }

  ngOnInit() {
    console.clear();
    this.getInfoUsuario();
  }

   // Función para obtener los datos de un estudiante
  getInfoUsuario() {
    const path = 'Estudiantes';
    // Obtiene el estado del usuario y su uid.
    this.ServicioAutentificacion.getEstado().subscribe(respuesta => {
      if (respuesta) {
        this.uid = respuesta.uid;
        // Obtiene la información de los estudiantes 
        this.firestore.getCollection<Estudiante>(path).subscribe(respuesta => {
          console.log('Datos Leídos ->', respuesta);
          this.datosEstudiantes = respuesta
          this.valorSegmento='Personal'
        });
      }
    });
  }

  segmentChanged(ev: any) {
    //console.log(this.valorSegmento);
    this.valorSegmento=ev.detail.value
    
  }
//Editar Rut.
  async editarRut() {
    const alert = await this.alertController.create({
      header: 'Editar Rut',
      buttons: [
        {
          text:'Aceptar',
          handler:(ev)=>{
            console.log('Confirmacion Existosa ->',ev);
            this.saveRut(ev.rut);
            
          }
        },
        {
          text:'Cancelar',
          role:'cancel',
          handler:()=>{
            console.log('Confirmacion Cancelada');
          }
        }
        
      ],
      inputs: [
        {
          name:'rut',
          placeholder: 'Ingrese Rut',
        },
      ],
    });

    await alert.present();
  }
 //Altualizar Rut
  async saveRut(rutInput:string){
    await this.interaction.showLoading('Actualizando')
    const path = 'Estudiantes';
    const data={
      rut:rutInput
    }
    this.firestore.updateDocumento(data,path,this.uid).then(()=>{
      this.interaction.presentToast('Rut Editado Con Exito');
      this.interaction.hideLoading();
    })

  }
//Editar direccion
  async editarDireccion() {
    const alert = await this.alertController.create({
      header: 'Editar Dirrecion',
      cssClass:'cuadroalert',
      buttons: [
        {
          text:'Aceptar',
          handler:(ev)=>{
            console.log('Confirmacion Existosa ->',ev);
            this.saveDireccion(ev.direccion);
            
          }
        },
        {
          text:'Cancelar',
          role:'cancel',
          handler:()=>{
            console.log('Confirmacion Cancelada');
          }
        }
        
      ],
      inputs: [
        {
          name:'direccion',
          placeholder: 'Ingrese Dirrecion',
          type: 'textarea',
        },
      ],
    });

    await alert.present();
  }
 //Actualizar direccion.
  async saveDireccion(dicInput:string){
    await this.interaction.showLoading('Actualizando')
    const path = 'Estudiantes';
    const data={
      direccion:dicInput
    }
    this.firestore.updateDocumento(data,path,this.uid).then(()=>{
      this.interaction.presentToast('Direccion editada Con Exito');
      this.interaction.hideLoading();
    })

  }
  //Editar Numero
  async editarNumero() {
    const alert = await this.alertController.create({
      header: 'Editar Numero',
      cssClass:'cuadroalert',
      buttons: [
        {
          text:'Aceptar',
          handler:(ev)=>{
            console.log('Confirmacion Existosa ->',ev);
            this.saveNumero(ev.numero);
            
          }
        },
        {
          text:'Cancelar',
          role:'cancel',
          handler:()=>{
            console.log('Confirmacion Cancelada');
          }
        }
        
      ],
      inputs: [
        {
          name:'numero',
          placeholder: 'Ingrese Numero +569XXXXXXXX',
          type:'number'
        },
      ],
    });

    await alert.present();
  }
 //Actualizar Numero
  async saveNumero(numeroInput:string){
    await this.interaction.showLoading('Actualizando')
    const path = 'Estudiantes';
    const data={
      telefono:numeroInput
    }
    this.firestore.updateDocumento(data,path,this.uid).then(()=>{
      this.interaction.presentToast('Telfono de contacto Con Exito');
      this.interaction.hideLoading();
    })

  }
  //Actulizar Genero.
  async editarGenero() {
    const alert = await this.alertController.create({
      header: 'Selecciona tu Genero ',
      buttons: [
        {
          text:'Aceptar',
          handler:(ev)=>{
            console.log('Confirmacion Existosa ->',ev);
            const genero=ev
            this.saveGenero(genero);
            
          }
        },
        {
          text:'Cancelar',
          role:'cancel',
          handler:()=>{
            console.log('Confirmacion Cancelada');
          }
        }
      ],
      inputs: [
        {
          label: 'Masculino',
          type: 'radio',
          value: 'Masculino',
        },
        {
          label: 'Femenino',
          type: 'radio',
          value: 'Femenino',
        },
        {
          label: 'Otro',
          type: 'radio',
          value: 'Otro',
        },
      ],
    });

    await alert.present();
  }
   //Actualizar Genero.
  async saveGenero(genInput:string){
    await this.interaction.showLoading('Actualizando')
    const path = 'Estudiantes';
    const data={
      genero:genInput
    }
    this.firestore.updateDocumento(data,path,this.uid).then(()=>{
      this.interaction.presentToast('Telfono de contacto Con Exito');
      this.interaction.hideLoading();
    })

}
//Capurar la imagen
  async nuevaImagen(event:any,nombre:string){
  /*console.log(event);
  if (event.target.files && event.target.files[0]){
    const reader=new FileReader();
    reader.onload=((image)=> {
      this.newImage=image.target?.result as string;
    });
    reader.readAsDataURL(event.target.files[0]);
  }*/
  const path='FotosPerfil';
  const name=nombre;
  const file=event.target.files[0];
  const res= await this.firestorage.uploadImage(file,path,name);
  this.newImage=res;
  this.mostrarAlertaConfirmacion();
  
  
}



 //Actualizar Foto.
async saveFoto(fotoInput:string){
  await this.interaction.showLoading('Actualizando')
  const path = 'Estudiantes';
  const data={
    foto:fotoInput
  }
  this.firestore.updateDocumento(data,path,this.uid).then(()=>{
    this.interaction.presentToast('Foto Actualizada con exito');
    this.interaction.hideLoading();
  })
}

async mostrarAlertaConfirmacion() {
  const alerta = await this.alertController.create({
    header: 'Confirmación',
    message: 'Deseas Editar la Foto de perfil',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cancelado');
        }
      },
      {
        text: 'Aceptar',
        handler: () => {
          console.log('Aceptado');
          this.saveFoto(this.newImage);
        }
      }
    ]
  });

  await alerta.present();
}




}









