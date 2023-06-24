import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { firstValueFrom } from 'rxjs';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';

@Component({
  selector: 'app-modificar-habilidad',
  templateUrl: './modificar-habilidad.component.html',
  styleUrls: ['./modificar-habilidad.component.scss']
})
export class ModificarHabilidadComponent implements OnInit {

  constructor(
    private ngbActiveModal: NgbActiveModal,
    private habilidadService: HabilidadService
  ) { }

  habilidadForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    capacidad: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
  });
  errorBackend = ''
  @Input() habilidad: Habilidad | undefined;

  ngOnInit(): void {
    this.habilidadForm.patchValue({
      nombre: this.habilidad?.nombre,
      capacidad: this.habilidad?.capacidad.toString()
    });
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

  async modificarHabilidad() {
    try {
      await firstValueFrom(this.habilidadService.modificarHabilidad(this.obtenerRequest(), this.habilidad!.id!))
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
