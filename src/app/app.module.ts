import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './component/body/body.component';
import { EstudioComponent } from './component/body/estudios/estudio/estudio.component';
import { EstudiosComponent } from './component/body/estudios/estudios.component';
import { HabilidadComponent } from './component/body/habilidades/habilidad/habilidad.component';
import { HabilidadesComponent } from './component/body/habilidades/habilidades.component';
import { TrabajoComponent } from './component/body/trabajos/trabajo/trabajo.component';
import { TrabajosComponent } from './component/body/trabajos/trabajos.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { ModalIniciarSesionComponent } from './component/header/modal-iniciar-sesion/modal-iniciar-sesion.component';
import { AuthInterceptor } from './interceptor/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    EstudiosComponent,
    EstudioComponent,
    TrabajosComponent,
    TrabajoComponent,
    HabilidadesComponent,
    HabilidadComponent,
    ModalIniciarSesionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
