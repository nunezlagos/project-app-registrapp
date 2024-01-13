
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Estudiante } from '../models/usuario';


@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  constructor( private authfirebase:AngularFireAuth) { }

  //Iniciar sesion con firebase
  login(username: string, password: string) {
    return this.authfirebase.signInWithEmailAndPassword(username,password)
  }
  //Cerrar Sesion con firebase
  logout(){
    this.authfirebase.signOut();
  }
  //Obtiene el estado en que se encuentra el usuario autenticado o no 
  getEstado(){
    return this.authfirebase.authState;
  }

  //Crea registra al usuario en la base de datos.
  registrarUsuario(datos:Estudiante){
    return this.authfirebase.createUserWithEmailAndPassword(datos.correo,datos.password);
  }

  //Recuperar Constrseña
  async requestPassword(email:string){
    return await this.authfirebase.sendPasswordResetEmail(email)
  }

  //Resetear Constraseña

}


  

