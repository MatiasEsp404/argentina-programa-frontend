import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';
import { firstValueFrom } from 'rxjs';
import { TrabajoService } from './service/trabajo.service';
import { EstudioService } from './service/estudio.service';
import { HabilidadService } from './service/habilidad.service';
import { DatosBasicosService } from './service/datos-basicos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'argentina-programa-frontend';

  constructor(
    private authService: AuthService,
    private trabajoService: TrabajoService,
    private estudioService: EstudioService,
    private habilidadService: HabilidadService,
    private datosBasicosService: DatosBasicosService
  ) { }

  ngOnInit(): void {
    this.comprobarToken();
  }

  private async comprobarToken() {
    try {
      await firstValueFrom(this.authService.me())
    } catch (error: any) {
      this.authService.limpiarToken()
      // this.trabajoService.recargarTrabajos.next();
      // this.estudioService.recargarEstudios.next();
      // this.habilidadService.recargarHabilidades.next();
      // this.datosBasicosService.recargarDatosBasicos.next();
    }
  }

}
