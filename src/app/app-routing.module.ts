import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardEstudiante } from './guard-estudiante.guard';
import { LoginalumnoPage } from './pagealumno/loginalumno/loginalumno.page';



const routes: Routes = [
    {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },


  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },

  {
    path: 'inicioa',
    loadChildren: () => import('./pagealumno/inicioalumno/inicioalumno.module').then( m => m.InicioalumnoPageModule),
    canActivate: [AuthGuardEstudiante] // Aplicar el guard de ruta a la página de inicio
    
  },

  {
    path: 'logina',
    loadChildren: () => import('./pagealumno/loginalumno/loginalumno.module').then( m => m.LoginalumnoPageModule),
    
  },

  {
    path: 'loginp',
    loadChildren: () => import('./pageprofesor/loginprofesor/loginprofesor.module').then( m => m.LoginprofesorPageModule)
  },
  {
    path: 'iniciop',
    loadChildren: () => import('./pageprofesor/inicioprofesor/inicioprofesor.module').then( m => m.InicioprofesorPageModule),
    
  },
  {
    path: 'qr',
    loadChildren: () => import('./pageprofesor/qr/qr.module').then( m => m.QRPageModule)
  },
  {
    path: 'lista',
    loadChildren: () => import('./pageprofesor/listadoasitencia/listadoasitencia.module').then( m => m.ListadoasitenciaPageModule)
  },
  {
    path: 'seccion',
    loadChildren: () => import('./pageprofesor/secciones/secciones.module').then( m => m.SeccionesPageModule)
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./pagealumno/asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
    path: 'qralumno',
    loadChildren: () => import('./pagealumno/qralumno/qralumno.module').then( m => m.QralumnoPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pagealumno/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./pagealumno/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'asignaturas',
    loadChildren: () => import('./pagealumno/asignaturas/asignaturas.module').then( m => m.AsignaturasPageModule)
  },
  
  ];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

