import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Trabajo } from 'src/app/model/trabajo';
import { AuthService } from 'src/app/service/auth.service';
import { ModificarTrabajoComponent } from '../modales/modificar-trabajo/modificar-trabajo.component';
import { EliminarTrabajoComponent } from '../modales/eliminar-trabajo/eliminar-trabajo.component';

@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.component.html',
  styleUrls: ['./trabajo.component.scss'],
})
export class TrabajoComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private ngbModal: NgbModal
  ) { }

  @Input() trabajo: Trabajo | undefined;

  ngOnInit(): void {
  }

  estaLogueado(): boolean {
    return this.authService.estaLogueado();
  }

  modificarTrabajo() {
    const modal = this.ngbModal.open(ModificarTrabajoComponent)
    modal.componentInstance.trabajo = this.trabajo;
  }

  eliminarTrabajo() {
    const modal = this.ngbModal.open(EliminarTrabajoComponent)
    modal.componentInstance.id = this.trabajo?.id;
  }

}
