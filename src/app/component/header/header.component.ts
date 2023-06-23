import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalIniciarSesionComponent } from './modal-iniciar-sesion/modal-iniciar-sesion.component';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private ngbModal: NgbModal,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  estaLogueado(): boolean {
    return this.authService.estaLogueado();
  }

  iniciarSesion() {
    this.ngbModal.open(ModalIniciarSesionComponent);
  }

  cerrarSesion(){
    this.authService.limpiarToken()
  }

}
