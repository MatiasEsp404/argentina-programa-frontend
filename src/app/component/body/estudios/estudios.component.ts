import { Component, OnInit } from '@angular/core';
import { Estudio } from 'src/app/model/estudio';
import { EstudioService } from 'src/app/service/estudio.service';
import { CrearEstudioComponent } from './modales/crear-estudio/crear-estudio.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/service/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.scss']
})
export class EstudiosComponent implements OnInit {

  constructor(
    private estudioService: EstudioService,
    private ngbModal: NgbModal,
    private authService: AuthService
  ) {
    this.estudioSubs = this.estudioService.recargarEstudios.subscribe(
      () => this.obtenerEstudios()
    )
  }

  estudios: Estudio[] = []
  private estudioSubs = new Subscription()

  ngOnInit() {
    this.obtenerEstudios();
  }

  ngOnDestroy(): void {
    this.estudioSubs.unsubscribe();
  }

  private obtenerEstudios() {
    this.estudioService.obtenerEstudios().subscribe({
      next: respuesta => {
        this.estudios = respuesta;
      },
      error: error => {
        console.log(error);
      }
    })
  }

  estaLogueado(): boolean {
    return this.authService.estaLogueado();
  }

  crearEstudio() {
    this.ngbModal.open(CrearEstudioComponent);
  }

}
