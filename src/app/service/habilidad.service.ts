import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Habilidad } from '../model/habilidad';

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

  eliminarHabilidad(id: number) {
    return this.http.delete<any>(this.backendUrl + `/api/habilidad/${id}`);
  }

  modificarHabilidad(habilidad: Habilidad, id: number) {
    return this.http.put<any>(this.backendUrl + `/api/habilidad/${id}`, habilidad);
  }

}
