import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './component/body/body.component';
import { EstudioComponent } from './component/body/estudios/estudio/estudio.component';
import { EstudiosComponent } from './component/body/estudios/estudios.component';
import { CrearEstudioComponent } from './component/body/estudios/modales/crear-estudio/crear-estudio.component';
import { EliminarEstudioComponent } from './component/body/estudios/modales/eliminar-estudio/eliminar-estudio.component';
import { ModificarEstudioComponent } from './component/body/estudios/modales/modificar-estudio/modificar-estudio.component';
import { HabilidadComponent } from './component/body/habilidades/habilidad/habilidad.component';
import { HabilidadesComponent } from './component/body/habilidades/habilidades.component';
import { CrearHabilidadComponent } from './component/body/habilidades/modales/crear-habilidad/crear-habilidad.component';
import { EliminarHabilidadComponent } from './component/body/habilidades/modales/eliminar-habilidad/eliminar-habilidad.component';
import { ModificarHabilidadComponent } from './component/body/habilidades/modales/modificar-habilidad/modificar-habilidad.component';
import { CrearTrabajoComponent } from './component/body/trabajos/modales/crear-trabajo/crear-trabajo.component';
import { EliminarTrabajoComponent } from './component/body/trabajos/modales/eliminar-trabajo/eliminar-trabajo.component';
import { ModificarTrabajoComponent } from './component/body/trabajos/modales/modificar-trabajo/modificar-trabajo.component';
import { TrabajoComponent } from './component/body/trabajos/trabajo/trabajo.component';
import { TrabajosComponent } from './component/body/trabajos/trabajos.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { IniciarSesionComponent } from './component/header/modales/iniciar-sesion/iniciar-sesion.component';
import { ModificarDatosBasicosComponent } from './component/header/modales/modificar-datos-basicos/modificar-datos-basicos.component';
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
    IniciarSesionComponent,
    CrearHabilidadComponent,
    EliminarHabilidadComponent,
    ModificarHabilidadComponent,
    CrearEstudioComponent,
    EliminarEstudioComponent,
    ModificarEstudioComponent,
    CrearTrabajoComponent,
    EliminarTrabajoComponent,
    ModificarTrabajoComponent,
    ModificarDatosBasicosComponent
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
