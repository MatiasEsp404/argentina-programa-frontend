import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Trabajo } from 'src/app/model/trabajo';
import { AuthService } from 'src/app/service/auth.service';
import { TrabajoService } from 'src/app/service/trabajo.service';
import { CrearTrabajoComponent } from './modales/crear-trabajo/crear-trabajo.component';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.scss']
})
export class TrabajosComponent implements OnInit, OnDestroy {

  constructor(
    private trabajoService : TrabajoService,
    private ngbModal: NgbModal,
    private authService: AuthService
  ) {
    this.trabajoSubs = this.trabajoService.recargarTrabajos.subscribe(
      () => this.obtenerTrabajos()
    )
  }

  trabajos: Trabajo[] = []
  private trabajoSubs = new Subscription()

  ngOnInit(): void {
    this.obtenerTrabajos()
  }

  ngOnDestroy(): void {
    this.trabajoSubs.unsubscribe();
  }

  private obtenerTrabajos() {
    this.trabajoService.obtenerTrabajos().subscribe({
      next: respuesta => {
        this.trabajos = respuesta;
      },
      error: error => {
        console.log(error);
      }
    })
  }

  estaLogueado(): boolean {
    return this.authService.estaLogueado();
  }

  crearTrabajo() {
    this.ngbModal.open(CrearTrabajoComponent);
  }

}
