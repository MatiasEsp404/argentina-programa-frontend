import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Estudio } from '../model/estudio';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  constructor(
    private http: HttpClient
  ) { }

  private backendUrl = 'http://localhost:8080'
  recargarEstudios = new Subject<void>();

  obtenerEstudios() {
    return this.http.get<any>(this.backendUrl + '/api/estudio')
  }

  crearEstudio(estudio: Estudio) {
    return this.http.post<any>(this.backendUrl + '/api/estudio', estudio);
  }

  eliminarEstudio(id: number) {
    return this.http.delete<any>(this.backendUrl + `/api/estudio/${id}`);
  }

  modificarEstudio(estudio: Estudio, id: number) {
    return this.http.put<any>(this.backendUrl + `/api/estudio/${id}`, estudio);
  }

}
