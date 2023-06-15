import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
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
    HabilidadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
