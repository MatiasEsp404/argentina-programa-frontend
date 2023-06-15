import { Component, Input, OnInit } from '@angular/core';
import { Estudio } from 'src/app/model/estudio';

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.component.html',
  styleUrls: ['./estudio.component.scss']
})
export class EstudioComponent implements OnInit {

  constructor() { }

  @Input() estudio: Estudio | undefined;

  ngOnInit(): void {
  }

}
