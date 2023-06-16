import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent implements OnInit {

  constructor(
    private habilidadService: HabilidadService
  ) { }

  habilidades: Habilidad[] | undefined;

  ngOnInit(): void {
    this.obtenerHabilidades();
  }

  private obtenerHabilidades() {
    this.habilidadService.obtenerHabilidades().subscribe({
      next: respuesta => {
        this.habilidades = respuesta;
      },
      error: error => {
        console.log(error);
      }
    })
  }

}
