import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Estudio } from '../model/estudio';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  constructor(
    private http: HttpClient
  ) { }

  private url = `${environment.API_URL}/api/estudio`
  recargarEstudios = new Subject<void>();

  obtenerEstudios() {
    return this.http.get<any>(this.url)
  }

  crearEstudio(estudio: Estudio) {
    return this.http.post<any>(this.url, estudio);
  }

  eliminarEstudio(id: number) {
    return this.http.delete<any>(this.url + `/${id}`);
  }

  modificarEstudio(estudio: Estudio, id: number) {
    return this.http.put<any>(this.url + `/${id}`, estudio);
  }

}
