import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { firstValueFrom } from 'rxjs';
import { Estudio } from 'src/app/model/estudio';
import { EstudioService } from 'src/app/service/estudio.service';
import { menorIgualAFechaActual } from 'src/app/validators/utils.validator';

@Component({
  selector: 'app-crear-estudio',
  templateUrl: './crear-estudio.component.html',
  styleUrls: ['./crear-estudio.component.scss']
})
export class CrearEstudioComponent implements OnInit {

  constructor(
    private ngbActiveModal: NgbActiveModal,
    private estudioService: EstudioService
  ) { }

  estudioForm = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    fechaFinalizacion: new FormControl('', [Validators.required, menorIgualAFechaActual()])
  });
  errorBackend = ''

  ngOnInit(): void {
    this.estudioForm.patchValue({
      descripcion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non doloremque ut, recusandae voluptate enim facere cupiditate distinctio asperiores, similique tenetur exercitationem ex nesciunt quisquam ullam blanditiis ipsum. Omnis, non cumque?'
    });
  }

  fechaFinalizacionValidator(control: FormControl) {
    const fechaFinalizacion = new Date(control.value);
    const fechaActual = new Date();
    if (fechaFinalizacion > fechaActual) {
      return { 'fechaPosterior': true };
    }
    return null;
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
    if (control?.hasError('required')) {
      return 'Este campo es obligatorio';
    }
    return '';
  }

  cancelar() {
    this.ngbActiveModal.close(false);
  }

  async crearEstudio() {
    try {
      await firstValueFrom(this.estudioService.crearEstudio(this.obtenerRequest()))
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
      fechaFinalizacion: this.parsearFecha(this.estudioForm.get('fechaFinalizacion')?.value!)
    }
    return request;
  }

  parsearFecha(fecha: string): string {
    const partes = fecha.split('-');
    const dia = partes[2];
    const mes = partes[1];
    const anio = partes[0];
    return `${dia}-${mes}-${anio}`;
  }

}
