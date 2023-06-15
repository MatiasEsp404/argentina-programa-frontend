import { Component, Input, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/model/habilidad';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.scss']
})
export class HabilidadComponent implements OnInit {

  constructor() { }

  @Input() habilidad: Habilidad | undefined;

  ngOnInit(): void {
  }

}
