import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { MostrarNegociosComponent } from './components/mostrar-negocios/mostrar-negocios.component';
import { MostrarServiciosComponent } from './components/mostrar-servicios/mostrar-servicios.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderSimpleComponent } from './components/header-simple/header-simple.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    MostrarNegociosComponent,
    MostrarServiciosComponent,
    HeaderComponent,
    HeaderSimpleComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
