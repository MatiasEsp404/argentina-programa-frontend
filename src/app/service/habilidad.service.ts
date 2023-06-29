import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Habilidad } from '../model/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  constructor(
    private http: HttpClient
  ) { }

  private url = `${environment.API_URL}/api/habilidad`
  recargarHabilidades = new Subject<void>();

  obtenerHabilidades() {
    return this.http.get<any>(this.url)
  }

  crearHabilidad(habilidad: Habilidad) {
    return this.http.post<any>(this.url, habilidad);
  }

  eliminarHabilidad(id: number) {
    return this.http.delete<any>(this.url + `/${id}`);
  }

  modificarHabilidad(habilidad: Habilidad, id: number) {
    return this.http.put<any>(this.url + `/${id}`, habilidad);
  }

}
