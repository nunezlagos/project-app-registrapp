import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class InteraccionusuarioService {

  private loading: any; 

  constructor(public toastController: ToastController,
              public  loadingCtrl: LoadingController,
              public alertController: AlertController) {}
  
  //Notificaciones por pantalla.
  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      cssClass: 'notificacion-pantalla-usuario',
      position: "middle" // Cambia 'top' por la posición que desees
    });
  
    await toast.present();
  }
  //Genera elemnto de carga con mensaje perzonalizada
  async showLoading(mensaje: string) {
    this.loading = await this.loadingCtrl.create({
      message: mensaje,
    });

    await this.loading.present();
  }
  //Cierra el elemnto de carga una vez concluido su uso.
  async hideLoading() {
    if (this.loading) { // Asegúrate de que haya una instancia del elemento de carga antes de intentar cerrarla
      await this.loading.dismiss();
    }
  }
}





