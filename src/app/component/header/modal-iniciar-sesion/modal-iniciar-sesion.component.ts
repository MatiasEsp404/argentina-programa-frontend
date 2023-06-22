import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Credenciales } from 'src/app/model/credenciales';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-modal-iniciar-sesion',
  templateUrl: './modal-iniciar-sesion.component.html',
  styleUrls: ['./modal-iniciar-sesion.component.scss']
})
export class ModalIniciarSesionComponent implements OnInit {

  constructor(
    private ngbActiveModal: NgbActiveModal,
    private authService: AuthService
  ) { }

  sesionForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    contrasenia: new FormControl('', [Validators.required]),
  });
  authError = false;

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

  async iniciarSesion(): Promise<void> {
    const usuarioLogueado = await this.authService.login(this.obtenerCredenciales());
    if (usuarioLogueado) {
      this.cancelar()
    } else {
      this.authError = true
    }
  }

  obtenerCredenciales() : Credenciales {
    const credenciales: Credenciales = {
      email: this.sesionForm.get('email')?.value!,
      password: this.sesionForm.get('contrasenia')?.value!
    }
    return credenciales;
  }

}
