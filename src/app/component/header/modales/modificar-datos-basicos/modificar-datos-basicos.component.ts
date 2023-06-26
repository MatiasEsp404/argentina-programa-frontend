import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { firstValueFrom } from 'rxjs';
import { DatosBasicos } from 'src/app/model/datos-basicos';
import { DatosBasicosService } from 'src/app/service/datos-basicos.service';
import { longitudMaxima } from 'src/app/validators/utils.validator';

@Component({
  selector: 'app-modificar-datos-basicos',
  templateUrl: './modificar-datos-basicos.component.html',
  styleUrls: ['./modificar-datos-basicos.component.scss']
})
export class ModificarDatosBasicosComponent implements OnInit {

  constructor(
    private ngbActiveModal: NgbActiveModal,
    private datosBasicosService: DatosBasicosService
  ) { }

  datosForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, longitudMaxima(64)]),
    titulo: new FormControl('', [Validators.required, longitudMaxima(64)]),
    imagen: new FormControl('', [Validators.required, longitudMaxima(256)]),
  });
  errorBackend = ''
  @Input() datosBasicos: DatosBasicos | undefined;

  ngOnInit(): void {
    this.datosForm.patchValue({
      nombre: this.datosBasicos?.nombre,
      titulo: this.datosBasicos?.titulo,
      imagen: this.datosBasicos?.imagen,
    });
  }

  isInvalid(formControl: string) {
    let control = this.datosForm.get(formControl);
    if (!control) {
      return false;
    }
    return control.invalid && (control.touched || control.dirty)
  }

  obtenerMensajeError(campo: string): string {
    const control = this.datosForm.get(campo);
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

  async modificarDatosBasicos() {
    try {
      await firstValueFrom(this.datosBasicosService.modificarDatosBasicos(this.obtenerRequest(), this.datosBasicos?.id!))
      this.datosBasicosService.recargarDatosBasicos.next();
      this.cancelar()
    } catch (error: any) {
      if (error.status == 401 || error.status == 400) {
        this.errorBackend = error.error.message
      } else {
        this.errorBackend = 'Error del servidor'
      }
    }
  }

  obtenerRequest(): DatosBasicos {
    const request: DatosBasicos = {
      nombre: this.datosForm.get('nombre')?.value!,
      titulo: this.datosForm.get('titulo')?.value!,
      imagen: this.datosForm.get('imagen')?.value!,
    }
    return request;
  }

}
