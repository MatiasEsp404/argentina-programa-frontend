import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { firstValueFrom } from 'rxjs';
import { Trabajo } from 'src/app/model/trabajo';
import { TrabajoService } from 'src/app/service/trabajo.service';
import { hastaPosteriorADesde, longitudMaxima, menorIgualAFechaActual } from 'src/app/validators/utils.validator';

@Component({
  selector: 'app-modificar-trabajo',
  templateUrl: './modificar-trabajo.component.html',
  styleUrls: ['./modificar-trabajo.component.scss']
})
export class ModificarTrabajoComponent implements OnInit {

  constructor(
    private ngbActiveModal: NgbActiveModal,
    private estudioService: TrabajoService
  ) { }

  trabajoForm = new FormGroup({
    titulo: new FormControl('', [Validators.required, longitudMaxima(64)]),
    empresa: new FormControl('', [Validators.required, longitudMaxima(64)]),
    descripcion: new FormControl('', [Validators.required, longitudMaxima(256)]),
    fechaDesde: new FormControl('', [Validators.required, menorIgualAFechaActual(), hastaPosteriorADesde()]),
    fechaHasta: new FormControl('', [Validators.required, menorIgualAFechaActual(), hastaPosteriorADesde()]),
  });
  errorBackend = ''
  @Input() trabajo: Trabajo | undefined;

  ngOnInit(): void {
    this.trabajoForm.patchValue({
      titulo: this.trabajo?.titulo,
      empresa: this.trabajo?.empresa,
      descripcion: this.trabajo?.descripcion,
      fechaDesde: this.trabajo?.fechaDesde,
      fechaHasta: this.trabajo?.fechaHasta
    });
  }

  isInvalid(formControl: string) {
    let control = this.trabajoForm.get(formControl);
    if (!control) {
      return false;
    }
    return control.invalid && (control.touched || control.dirty)
  }

  obtenerMensajeError(campo: string): string {
    const control = this.trabajoForm.get(campo);
    if (control?.hasError('fechasInvalidas')) {
      return 'La fecha de contrato no puede ser posterior a la fecha de desvinculación';
    }
    if (control?.hasError('fechaNoValida')) {
      return 'La fecha debe ser menor o igual a la fecha actual';
    }
    if (control?.hasError('longitudExcedida')) {
      return 'Longitud máxima excedida';
    }
    if (control?.hasError('required')) {
      return 'Este campo es obligatorio';
    }
    return '';
  }

  cancelar() {
    this.ngbActiveModal.close(false);
  }

  async modificarTrabajo() {
    try {
      await firstValueFrom(this.estudioService.modificarTrabajo(this.obtenerRequest(), this.trabajo?.id!))
      this.estudioService.recargarTrabajos.next();
      this.cancelar()
    } catch (error: any) {
      if (error.status == 401 || error.status == 400) {
        this.errorBackend = error.error.message
      } else {
        this.errorBackend = 'Error del servidor'
      }
    }
  }

  obtenerRequest(): Trabajo {
    const request: Trabajo = {
      titulo: this.trabajoForm.get('titulo')?.value!,
      empresa: this.trabajoForm.get('empresa')?.value!,
      fechaDesde: this.trabajoForm.get('fechaDesde')?.value!,
      fechaHasta: this.trabajoForm.get('fechaHasta')?.value!,
      descripcion: this.trabajoForm.get('descripcion')?.value!
    }
    return request;
  }

}
