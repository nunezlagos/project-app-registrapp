import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {

  mostrarToolbar: boolean = true; // Mostrará el toolbar por defecto
  rutasSinToolbar: string[] = [ ]; // Lista de rutas sin la barra de herramientas

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Verificar si la ruta actual es la página de inicio
        this.mostrarToolbar = !this.rutasSinToolbar.includes(event.url);
      }
    });
  }
}



