import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { firstValueFrom } from 'rxjs';
import { EstudioService } from 'src/app/service/estudio.service';

@Component({
  selector: 'app-eliminar-estudio',
  templateUrl: './eliminar-estudio.component.html',
  styleUrls: ['./eliminar-estudio.component.scss']
})
export class EliminarEstudioComponent implements OnInit {

  constructor(
    private ngbActiveModal: NgbActiveModal,
    private estudioService: EstudioService
  ) { }

  @Input() id: number | undefined;
  errorBackend = ''

  ngOnInit(): void {
  }

  cancelar() {
    this.ngbActiveModal.close(false);
  }

  async eliminarEstudio() {
    try {
      await firstValueFrom(this.estudioService.eliminarEstudio(this.id!))
      this.estudioService.recargarEstudios.next();
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
