

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

 

  private isStudentLoggedIn = false;

  login(username: string, password: string): boolean {
    // Aquí puedes implementar tu lógica de autenticación para estudiantes
    // Verificar las credenciales y autenticar al estudiante
    if (username === 'usuario' && password === 'contraseña') {
      this.isStudentLoggedIn = true;
      return true;
    }
    return false;
  }

  isEstudiante: boolean = false;

  isLoggedIn(): boolean {
    return this.isStudentLoggedIn;
  }

  logout(): void {
    this.isStudentLoggedIn = false;
  }

  constructor() { }
}
