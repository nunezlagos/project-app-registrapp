import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiresotreService {

  constructor(private firestore: AngularFirestore) { }

  //Funcion generica para crear documento, ya que se los paso como parametro.
  crearDocumento(data: any, path: string, id: string) {
    const collection = this.firestore.collection(path);
    return collection.doc(id).set(data);
}
  //Funcion generica para leer un documento, le pasa el tipo de documento que voy a leer 
  getDocumento<tipo>(path: string, id: string) {
    const collection = this.firestore.collection<tipo>(path);
    return collection.doc(id).valueChanges();
  }
  //Crea un id robusto para el documento.
  getId() {
    return this.firestore.createId();
  }
  //Lee todos los documentos que estan en la coleccion
  getCollection<tipo>(path: string) {
    const collection = this.firestore.collection<tipo>(path);
    return collection.valueChanges();
  }
  //Borra el documento
  deleteDocumento<tipo>(path: string, id: string) {
    const collection = this.firestore.collection<tipo>(path);
    return collection.doc(id).delete();
  }
  //Edita elementos del documento.
  updateDocumento(data: any, path: string, id: string) {
    const collection = this.firestore.collection(path);
    return collection.doc(id).update(data);
  }
  


}
