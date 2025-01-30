import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonItem } from '@ionic/angular/standalone';
import { FirebaseService } from '../services/firebase.service';
import { IonInput } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { Mensaje } from '../interfaces/mensaje';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonInput, FormsModule,IonButton, IonList, IonItem],
})
export class HomePage {
  mensaje:Mensaje={};
  mensajes:Mensaje[]=[]
  firebaseService = inject(FirebaseService)
  constructor() {}

  enviar(){
    this.firebaseService.enviarMensaje(this.mensaje);
    this.mensaje.mensaje="";
  }
}
