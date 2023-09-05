import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  username: string;
  password: string;

  constructor() {
    this.username = '';
    this.password = '';

  }

  ngOnInit() {
    console.log('InicioPage initialized');
    // Puedes realizar tareas de inicialización aquí si es necesario
  }

  login() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }

  
}



