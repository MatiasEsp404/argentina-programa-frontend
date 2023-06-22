import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalIniciarSesionComponent } from './modal-iniciar-sesion/modal-iniciar-sesion.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private ngbModal: NgbModal
  ) { }

  ngOnInit(): void {
  }

  iniciarSesion() {
    this.ngbModal.open(ModalIniciarSesionComponent);
    // const modalRef: NgbModalRef = this.ngbModal.open(ModalIniciarSesionComponent);
    // modalRef.componentInstance.credenciales.subscribe((credenciales: Credenciales) => {
    //   console.log('Iniciando Sesion!');
    //   console.log(credenciales)
    // });
  }

}
