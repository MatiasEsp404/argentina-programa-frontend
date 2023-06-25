import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { firstValueFrom } from 'rxjs';
import { TrabajoService } from 'src/app/service/trabajo.service';

@Component({
  selector: 'app-eliminar-trabajo',
  templateUrl: './eliminar-trabajo.component.html',
  styleUrls: ['./eliminar-trabajo.component.scss']
})
export class EliminarTrabajoComponent implements OnInit {

  constructor(
    private ngbActiveModal: NgbActiveModal,
    private trabajoService: TrabajoService
  ) { }

  @Input() id: number | undefined;
  errorBackend = ''

  ngOnInit(): void {
  }

  cancelar() {
    this.ngbActiveModal.close(false);
  }

  async eliminarTrabajo() {
    try {
      await firstValueFrom(this.trabajoService.eliminarTrabajo(this.id!))
      this.trabajoService.recargarTrabajos.next();
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
