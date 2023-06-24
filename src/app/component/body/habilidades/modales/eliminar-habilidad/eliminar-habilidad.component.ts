import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { firstValueFrom } from 'rxjs';
import { HabilidadService } from 'src/app/service/habilidad.service';

@Component({
  selector: 'app-eliminar-habilidad',
  templateUrl: './eliminar-habilidad.component.html',
  styleUrls: ['./eliminar-habilidad.component.scss']
})
export class EliminarHabilidadComponent implements OnInit {

  constructor(
    private ngbActiveModal: NgbActiveModal,
    private habilidadService: HabilidadService
  ) { }

  @Input() id: number | undefined;
  errorBackend = ''

  ngOnInit(): void {
  }

  cancelar() {
    this.ngbActiveModal.close(false);
  }

  async eliminarHabilidad() {
    try {
      await firstValueFrom(this.habilidadService.eliminarHabilidad(this.id!))
      this.habilidadService.recargarHabilidades.next();
      this.cancelar()
    } catch (error: any) {
      if (error.status == 401 || error.status == 400) {
        this.errorBackend = error.error.message
      } else {
        this.errorBackend = 'Error del servidor'
      }
    }
  }

}
