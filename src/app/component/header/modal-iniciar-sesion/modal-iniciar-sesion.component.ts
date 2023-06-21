import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Credenciales } from 'src/app/model/credenciales';

@Component({
  selector: 'app-modal-iniciar-sesion',
  templateUrl: './modal-iniciar-sesion.component.html',
  styleUrls: ['./modal-iniciar-sesion.component.scss']
})
export class ModalIniciarSesionComponent implements OnInit {

  constructor(
    private ngbActiveModal: NgbActiveModal
  ) { }

  public sesionForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    contrasenia: new FormControl('', [Validators.required]),
  });

  @Output() credenciales: EventEmitter<Credenciales> = new EventEmitter<Credenciales>();

  ngOnInit(): void {
  }

  isInvalid(formControl: string) {
    let control = this.sesionForm.get(formControl);
    if (!control) {
      return false;
    }
    return control.invalid && (control.touched || control.dirty)
  }

  obtenerMensajeError(campo: string): string {
    const control = this.sesionForm.get(campo);
    if (control?.hasError('required')) {
      return 'Este campo es obligatorio';
    }
    if (control?.hasError('email')) {
      return 'Formato de email no reconocido';
    }
    return '';
  }

  cancelar() {
    this.ngbActiveModal.close(false);
  }

  iniciarSesion() {
    this.credenciales.emit(this.obtenerCredenciales());
    this.cancelar();
  }

  obtenerCredenciales() : Credenciales {
    const credenciales: Credenciales = {
      email: this.sesionForm.get('email')?.value!,
      contrasenia: this.sesionForm.get('contrasenia')?.value!
    }
    return credenciales;
  }

}
