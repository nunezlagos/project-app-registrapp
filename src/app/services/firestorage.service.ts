import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { resolve } from 'dns';
import { finalize } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirestorageService {

  constructor( public fireStorage: AngularFireStorage) { }

  uploadImage(file:any ,path:string, nombre:string): Promise<string> {
    return new Promise( resolve => {
      const filepath=path+ '/'+ nombre;
      const referencia=this.fireStorage.ref(filepath);
      const task=referencia.put(file);
      task.snapshotChanges().pipe(
        finalize(() => {
          const dowloadURL=referencia.getDownloadURL().subscribe( res => {
            const dowloadURL=res;
            resolve(dowloadURL);
            return
          });
        })
      )
      .subscribe();
    });
  }
}

