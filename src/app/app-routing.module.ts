import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginalumnoPage } from './pagealumno/loginalumno/loginalumno.page';
import { AuthGuardEstudiante } from './guards/estudiantelogueado.guard';
import { AuthGuardEstudianteNoLogueado} from './guards/estudiantenologueado.guard'


const routes: Routes = [
    {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },


  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule),
    //canActivate: [AuthGuardEstudianteNoLogueado]
  },

  {
    path: 'inicioa',
    loadChildren: () => import('./pagealumno/inicioalumno/inicioalumno.module').then( m => m.InicioalumnoPageModule),
    canActivate: [AuthGuardEstudiante]
    
  },

  {
    path: 'logina',
    loadChildren: () => import('./pagealumno/loginalumno/loginalumno.module').then( m => m.LoginalumnoPageModule),
    //canActivate: [AuthGuardEstudianteNoLogueado]
    
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./pagealumno/asistencia/asistencia.module').then( m => m.AsistenciaPageModule),
    canActivate: [AuthGuardEstudiante]
  },
  
  {
    path: 'registro',
    loadChildren: () => import('./pagealumno/registro/registro.module').then( m => m.RegistroPageModule),
    //canActivate: [AuthGuardEstudianteNoLogueado]
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./pagealumno/recuperar/recuperar.module').then( m => m.RecuperarPageModule),
    //canActivate: [AuthGuardEstudianteNoLogueado]
    
  },
  {
    path: 'asignaturas',
    loadChildren: () => import('./pagealumno/asignaturas/asignaturas.module').then( m => m.AsignaturasPageModule),
    canActivate: [AuthGuardEstudiante]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pagealumno/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [AuthGuardEstudiante]
  },
  
  {
    path: 'qr',
    loadChildren: () => import('./pagealumno/qr/qr.module').then( m => m.QrPageModule),
    canActivate: [AuthGuardEstudiante]
  }
  ];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

