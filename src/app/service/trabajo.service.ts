import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Trabajo } from '../model/trabajo';

@Injectable({
  providedIn: 'root'
})
export class TrabajoService {

  constructor(
    private http: HttpClient
  ) { }

  private url = `${environment.API_URL}/api/trabajo`
  recargarTrabajos = new Subject<void>();

  obtenerTrabajos() {
    return this.http.get<any>(this.url)
  }

  crearTrabajo(trabajo: Trabajo) {
    return this.http.post<any>(this.url, trabajo);
  }

  eliminarTrabajo(id: number) {
    return this.http.delete<any>(this.url + id);
  }

  modificarTrabajo(trabajo: Trabajo, id: number) {
    return this.http.put<any>(this.url + id, trabajo);
  }

}
