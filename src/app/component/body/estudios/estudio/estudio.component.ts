import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Estudio } from 'src/app/model/estudio';
import { AuthService } from 'src/app/service/auth.service';
import { ModificarEstudioComponent } from '../modales/modificar-estudio/modificar-estudio.component';
import { EliminarEstudioComponent } from '../modales/eliminar-estudio/eliminar-estudio.component';

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.component.html',
  styleUrls: ['./estudio.component.scss']
})
export class EstudioComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private ngbModal: NgbModal
  ) { }

  @Input() estudio: Estudio | undefined;

  ngOnInit(): void {
  }

  estaLogueado(): boolean {
    return this.authService.estaLogueado();
  }

  modificarEstudio() {
    const modal = this.ngbModal.open(ModificarEstudioComponent)
    modal.componentInstance.estudio = this.estudio;
  }

  eliminarEstudio() {
    const modal = this.ngbModal.open(EliminarEstudioComponent)
    modal.componentInstance.id = this.estudio?.id;
  }

}
