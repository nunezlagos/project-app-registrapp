import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { AlertController } from '@ionic/angular';
import { AutentificacionService } from 'src/app/services/autentificacion.service';
import { Asignaturas, Estudiante } from 'src/app/models/usuario';
import { FiresotreService } from 'src/app/services/firesotre.service';
import { pathToFileURL } from 'url';
import { InteraccionusuarioService } from 'src/app/services/interaccionusuario.service';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements AfterViewInit, OnDestroy {

  result='';
  scanActive=false;

   //Arreglo formato en modelo Estudiante
  datosEstudiantes: any[] = [];
   //Para obtener el Uid del estudiente y poder leer su coelccion e inform 
  uid: string = '';
  //Para almacenar las Aginaturas obtenidas
  mostarAsignaturas: Asignaturas[] = [];
  //Fecha y hora al pasar la lista
  

  constructor(private alertrController:AlertController,
              private ServicioAutentificacion: AutentificacionService,
              private firestore:FiresotreService,
              private interaction:InteraccionusuarioService) { }

  ngAfterViewInit(): void {
    BarcodeScanner.prepare();
    
  }

  ngOnDestroy(): void {
    BarcodeScanner.stopScan();
  }

  ngOnInit(): void {
    this.getInfoUsuarioAsignatura();
    this.getInfoUsuarioEstudiante();
  }
  //Comenzar a escanear
  async startScanner(){
    const allowed=this.checkPermisos();
    if (await allowed){
      this.scanActive=true;
      const result = await BarcodeScanner.startScan();
      //console.log('El resultado es',result)
      if (result.hasContent)
      this.result=result.content;
      //Registar asistencia.
      this.saveAistencia(this.result);
      this.scanActive=false;
    }
    

  }

  async checkPermisos(){
    return new Promise ( async (resolve,reject)=> {
      const status= await BarcodeScanner.checkPermission({ force:true});
      if (status.granted){
        resolve(true);
      } else if (status.denied){
        const alert= await this.alertrController.create({
          header:'Sin Permiso',
          message:'Por favor activar el acceso a la camara er ajustes',
          buttons:[{
            text:'No',
            role:'cancel'
          },
          {
            text:'Abir ajustes',
            handler:() => {
              resolve(false);
              BarcodeScanner.openAppSettings();
            }
          }]
        });
      }else {
        resolve(false);
      }
    })
    
  }

  stopScanner(){
    BarcodeScanner.stopScan();
    this.scanActive=false;
  }
  
 //Funcion para obtener los datos de todas las documentos.
  getInfoUsuarioEstudiante() {
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

//Funcion para obtener los datos de todas las asignaturas.
getInfoUsuarioAsignatura() {
      
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

async saveAistencia(qrinput:string){
  await this.interaction.showLoading('Actualizando')
  const path = 'Estudiantes';
  const fecha=new Date();
  const horaAsistencia=this.formatoHora(fecha);
  const data={
    estado:qrinput,
    hora:horaAsistencia
  }
  this.firestore.updateDocumento(data,path,this.uid).then(()=>{
    this.interaction.presentToast('Asistencia registrada con exito con Exito');
    this.interaction.hideLoading();
  })

}
formatoHora(fecha: Date): string {
  const horas = fecha.getHours();
  const minutos = fecha.getMinutes();

  const horasStr = this.agregarCeroIzquierda(horas);
  const minutosStr = this.agregarCeroIzquierda(minutos);

  return `${horasStr}:${minutosStr}`;
}

agregarCeroIzquierda(numero: number): string {
  return numero < 10 ? `0${numero}` : `${numero}`;
}




}




  

