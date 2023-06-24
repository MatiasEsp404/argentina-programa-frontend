import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Habilidad } from '../model/habilidad';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  constructor(
    private http: HttpClient
  ) { }

  private backendUrl = 'http://localhost:8080'
  recargarHabilidades = new Subject<void>();

  obtenerHabilidades() {
    return this.http.get<any>(this.backendUrl + '/api/habilidad')
  }

  crearHabilidad(habilidad: Habilidad) {
    return this.http.post<any>(this.backendUrl + '/api/habilidad', habilidad);
  }

}
