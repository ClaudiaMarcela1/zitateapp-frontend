import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { MostrarNegociosComponent } from './components/mostrar-negocios/mostrar-negocios.component';
import { MostrarServiciosComponent } from './components/mostrar-servicios/mostrar-servicios.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'mostrar-negocios', component: MostrarNegociosComponent},
  {path: 'mostrar-servicios', component: MostrarServiciosComponent},
  {path: '', component: InicioComponent},
  {path: '**', redirectTo: ''} //Si hay error en la ruta, redireccione al componente inicio
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
