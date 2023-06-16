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
    this.obtenerEstudios();
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
