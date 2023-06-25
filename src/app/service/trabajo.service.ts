import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Trabajo } from '../model/trabajo';

@Injectable({
  providedIn: 'root'
})
export class TrabajoService {

  constructor(
    private http: HttpClient
  ) { }

  private backendUrl = 'http://localhost:8080'
  recargarTrabajos = new Subject<void>();

  obtenerTrabajos() {
    return this.http.get<any>(this.backendUrl + '/api/trabajo')
  }

  crearTrabajo(trabajo: Trabajo) {
    return this.http.post<any>(this.backendUrl + '/api/trabajo', trabajo);
  }

  eliminarTrabajo(id: number) {
    return this.http.delete<any>(this.backendUrl + `/api/trabajo/${id}`);
  }

  modificarTrabajo(trabajo: Trabajo, id: number) {
    return this.http.put<any>(this.backendUrl + `/api/trabajo/${id}`, trabajo);
  }

}
