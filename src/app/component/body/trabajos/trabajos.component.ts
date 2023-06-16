import { Component, OnInit } from '@angular/core';
import { Trabajo } from 'src/app/model/trabajo';
import { TrabajoService } from 'src/app/service/trabajo.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.scss']
})
export class TrabajosComponent implements OnInit {

  constructor(
    private trabajoService : TrabajoService
  ) { }

  trabajos: Trabajo[] = []

  ngOnInit(): void {
    this.obtenerTrabajos()
  }

  private obtenerTrabajos() {
    this.trabajoService.obtenerTrabajos().subscribe({
      next: respuesta => {
        this.trabajos = respuesta;
      },
      error: error => {
        console.log(error);
      }
    })
  }

}
