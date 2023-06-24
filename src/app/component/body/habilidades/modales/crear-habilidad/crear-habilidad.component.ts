import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { firstValueFrom } from 'rxjs';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';
import { longitudMaxima } from 'src/app/validators/utils.validator';

@Component({
  selector: 'app-modal-crear-habilidad',
  templateUrl: './crear-habilidad.component.html',
  styleUrls: ['./crear-habilidad.component.scss']
})
export class CrearHabilidadComponent implements OnInit {

  constructor(
    private ngbActiveModal: NgbActiveModal,
    private habilidadService: HabilidadService
  ) { }

  habilidadForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, longitudMaxima(64)]),
    capacidad: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
  });
  errorBackend = ''

  ngOnInit(): void {
  }

  isInvalid(formControl: string) {
    let control = this.habilidadForm.get(formControl);
    if (!control) {
      return false;
    }
    return control.invalid && (control.touched || control.dirty)
  }

  obtenerMensajeError(campo: string): string {
    const control = this.habilidadForm.get(campo);
    if (control?.hasError('longitudExcedida')) {
      return 'Longitud máxima excedida';
    }
    if (control?.hasError('min')) {
      return 'Debe ingresar un número mayor a 0';
    }
    if (control?.hasError('max')) {
      return 'Debe ingresar un número menor a 100';
    }
    if (control?.hasError('required')) {
      return 'Este campo es obligatorio';
    }
    return '';
  }

  cancelar() {
    this.ngbActiveModal.close(false);
  }

  async crearHabilidad() {
    try {
      await firstValueFrom(this.habilidadService.crearHabilidad(this.obtenerRequest()))
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

  obtenerRequest(): Habilidad {
    const request: Habilidad = {
      nombre: this.habilidadForm.get('nombre')?.value!,
      capacidad: parseInt(this.habilidadForm.get('capacidad')?.value!, 10)
    }
    return request;
  }

}
