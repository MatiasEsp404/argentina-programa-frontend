import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/model/habilidad';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent implements OnInit {

  constructor() { }

  habilidades: Habilidad[] | undefined;

  ngOnInit(): void {
    this.habilidades = [
      {
        nombre: 'HTML',
        capacidad: 95
      },
      {
        nombre: 'CSS',
        capacidad: 50
      },
      {
        nombre: 'JS',
        capacidad: 10
      },
    ]
  }

}
