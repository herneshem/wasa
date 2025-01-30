import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Database, DatabaseReference, getDatabase, onValue, ref, remove, set, push } from
  "firebase/database";
import { firebaseConfig } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private readonly db: Database;
  private readonly dbMensajes: DatabaseReference;
  public mensajes: any[] = [];
  constructor() {
    initializeApp(firebaseConfig); //Inicializar la app con los datos de firebase
    this.db = getDatabase(); //Obtener referencia a la base de datos
    this.dbMensajes = ref(this.db, 'mensajes/'); //Obteniendo una referencia a la rama mensajes
    onValue(this.dbMensajes, (snapshot) => {
      this.mensajes = [];
      snapshot.forEach((childSnapshot) => {
        this.mensajes.push((childSnapshot));
      });
      console.log(this.mensajes);
    }, {
      onlyOnce: false
    });
  }

  public enviarMensaje(mensaje: string) {
    const nuevoMensaje = push(this.dbMensajes); //Crea un nuevo elemento
    set(nuevoMensaje, { mensaje: mensaje }); //Asigna valor al elemento
  }
}
