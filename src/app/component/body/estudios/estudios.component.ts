import { Component, OnInit } from '@angular/core';
import { Estudio } from 'src/app/model/estudio';
import { EstudioService } from 'src/app/service/estudio.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.scss']
})
export class EstudiosComponent implements OnInit {

  constructor(
    private estudioService: EstudioService
  ) { }

  estudios: Estudio[] = []

  ngOnInit() {

    this.estudios = [
      {
        titulo: 'Licenciado en League of legends',
        fechaFinalizacion: '12-12-2023',
        descripcion: 'Me hice un penta con Morgana'
      },
      {
        titulo: 'Licenciado en Age of Empires',
        fechaFinalizacion: '12-12-2022',
        descripcion: 'Vencí a un ejercito de caballeros de la orden teutónica con lanceros'
      },
    ]

    // this.obtenerEstudios();
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

}
