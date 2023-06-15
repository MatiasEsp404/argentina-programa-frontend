import { Component, OnInit } from '@angular/core';
import { Trabajo } from 'src/app/model/trabajo';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.scss']
})
export class TrabajosComponent implements OnInit {

  constructor() { }

  trabajos: Trabajo[] = []

  ngOnInit(): void {
    this.trabajos = [
      {
        titulo: 'Experto en maquinitas',
        fechaDesde: '05-2022',
        fechaHasta: '07-2023',
        descripcion: 'Metía trucos :p'
      }
    ]
  }

}
