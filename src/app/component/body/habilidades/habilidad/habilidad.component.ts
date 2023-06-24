import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Habilidad } from 'src/app/model/habilidad';
import { AuthService } from 'src/app/service/auth.service';
import { ModificarHabilidadComponent } from '../modales/modificar-habilidad/modificar-habilidad.component';
import { EliminarHabilidadComponent } from '../modales/eliminar-habilidad/eliminar-habilidad.component';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.scss']
})
export class HabilidadComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private ngbModal: NgbModal
  ) { }

  @Input() habilidad: Habilidad | undefined;

  ngOnInit(): void {
  }

  estaLogueado(): boolean {
    return this.authService.estaLogueado();
  }

  modificarHabilidad() {
    const modal = this.ngbModal.open(ModificarHabilidadComponent)
    modal.componentInstance.habilidad = this.habilidad;
  }

  eliminarHabilidad() {
    const modal = this.ngbModal.open(EliminarHabilidadComponent)
    modal.componentInstance.id = this.habilidad?.id;
  }

}
