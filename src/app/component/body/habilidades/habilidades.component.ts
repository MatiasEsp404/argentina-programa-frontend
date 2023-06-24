import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Habilidad } from 'src/app/model/habilidad';
import { AuthService } from 'src/app/service/auth.service';
import { HabilidadService } from 'src/app/service/habilidad.service';
import { Subscription } from 'rxjs';
import { CrearHabilidadComponent } from './modales/crear-habilidad/crear-habilidad.component';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent implements OnInit, OnDestroy {

  constructor(
    private habilidadService: HabilidadService,
    private ngbModal: NgbModal,
    private authService: AuthService
  ) {
    this.habilidadesSubs = this.habilidadService.recargarHabilidades.subscribe(
      () => this.obtenerHabilidades()
    )
  }

  habilidades: Habilidad[] | undefined;
  private habilidadesSubs = new Subscription()

  ngOnInit(): void {
    this.obtenerHabilidades();
  }

  ngOnDestroy(): void {
    this.habilidadesSubs.unsubscribe();
  }

  private obtenerHabilidades() {
    this.habilidadService.obtenerHabilidades().subscribe({
      next: respuesta => {
        this.habilidades = respuesta;
      },
      error: error => {
        console.log(error);
      }
    })
  }

  estaLogueado(): boolean {
    return this.authService.estaLogueado();
  }

  crearHabilidad() {
    this.ngbModal.open(CrearHabilidadComponent);
  }

}
