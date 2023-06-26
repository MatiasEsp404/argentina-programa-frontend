import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatosBasicos } from 'src/app/model/datos-basicos';
import { AuthService } from 'src/app/service/auth.service';
import { DatosBasicosService } from 'src/app/service/datos-basicos.service';
import { IniciarSesionComponent } from './modales/iniciar-sesion/iniciar-sesion.component';
import { ModificarDatosBasicosComponent } from './modales/modificar-datos-basicos/modificar-datos-basicos.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  constructor(
    private ngbModal: NgbModal,
    private authService: AuthService,
    private datosBasicosService: DatosBasicosService
  ) {
    this.datosBasicosSubs = this.datosBasicosService.recargarDatosBasicos.subscribe(
      () => this.obtenerDatosBasicos()
    )
  }

  datosBasicos: DatosBasicos | undefined;
  imagen = '';
  private datosBasicosSubs = new Subscription()

  ngOnInit(): void {
    this.obtenerDatosBasicos();
  }

  ngOnDestroy(): void {
    this.datosBasicosSubs.unsubscribe();
  }

  obtenerDatosBasicos() {
    this.datosBasicosService.obtenerDatosBasicos().subscribe({
      next: respuesta => {
        this.datosBasicos = respuesta;
        this.imagen = this.datosBasicos?.imagen!
      },
      error: error => {
        console.error(error);
      }
    })
  }

  estaLogueado(): boolean {
    return this.authService.estaLogueado();
  }

  iniciarSesion() {
    this.ngbModal.open(IniciarSesionComponent);
  }

  cerrarSesion() {
    this.authService.limpiarToken()
  }

  modificarDatosBasicos() {
    const modal = this.ngbModal.open(ModificarDatosBasicosComponent);
    modal.componentInstance.datosBasicos = this.datosBasicos;
  }

  cargarImagenLocal() {
    this.imagen = '../../../assets/mi-foto.png'
  }

}
