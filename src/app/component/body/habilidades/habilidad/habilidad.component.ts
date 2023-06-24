import { Component, Input, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/model/habilidad';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.scss']
})
export class HabilidadComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  @Input() habilidad: Habilidad | undefined;

  ngOnInit(): void {
  }

  estaLogueado(): boolean {
    return this.authService.estaLogueado();
  }

  modificarHabilidad() {

  }

  eliminarHabilidad() {

  }

}
