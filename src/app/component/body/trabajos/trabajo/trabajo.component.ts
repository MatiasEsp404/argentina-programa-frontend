import { Component, Input, OnInit } from '@angular/core';
import { Trabajo } from 'src/app/model/trabajo';

@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.component.html',
  styleUrls: ['./trabajo.component.scss'],
})
export class TrabajoComponent implements OnInit {

  constructor() { }

  @Input() trabajo: Trabajo | undefined;

  ngOnInit(): void {
  }

}
