import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { firstValueFrom } from 'rxjs';
import { Estudio } from 'src/app/model/estudio';
import { EstudioService } from 'src/app/service/estudio.service';
import { longitudMaxima, menorIgualAFechaActual } from 'src/app/validators/utils.validator';

@Component({
  selector: 'app-modificar-estudio',
  templateUrl: './modificar-estudio.component.html',
  styleUrls: ['./modificar-estudio.component.scss']
})
export class ModificarEstudioComponent implements OnInit {

  constructor(
    private ngbActiveModal: NgbActiveModal,
    private estudioService: EstudioService
  ) { }

  estudioForm = new FormGroup({
    titulo: new FormControl('', [Validators.required, longitudMaxima(64)]),
    descripcion: new FormControl('', [Validators.required, longitudMaxima(256)]),
    fechaFinalizacion: new FormControl('', [Validators.required, menorIgualAFechaActual()])
  });
  errorBackend = ''
  @Input() estudio: Estudio | undefined;

  ngOnInit(): void {
    this.estudioForm.patchValue({
      titulo: this.estudio?.titulo,
      descripcion: this.estudio?.descripcion,
      fechaFinalizacion: this.estudio?.fechaFinalizacion
    });
  }

  isInvalid(formControl: string) {
    let control = this.estudioForm.get(formControl);
    if (!control) {
      return false;
    }
    return control.invalid && (control.touched || control.dirty)
  }

  obtenerMensajeError(campo: string): string {
    const control = this.estudioForm.get(campo);
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

  async modificarEstudio() {
    try {
      await firstValueFrom(this.estudioService.modificarEstudio(this.obtenerRequest(), this.estudio?.id!))
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

  obtenerRequest(): Estudio {
    const request: Estudio = {
      titulo: this.estudioForm.get('titulo')?.value!,
      descripcion: this.estudioForm.get('descripcion')?.value!,
      fechaFinalizacion: this.estudioForm.get('fechaFinalizacion')?.value!
    }
    return request;
  }

}
