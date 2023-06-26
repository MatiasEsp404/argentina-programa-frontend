import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DatosBasicos } from '../model/datos-basicos';

@Injectable({
  providedIn: 'root'
})
export class DatosBasicosService {

  constructor(
    private http: HttpClient
  ) { }

  private backendUrl = 'http://localhost:8080';
  recargarDatosBasicos = new Subject<void>();

  obtenerDatosBasicos() {
    return this.http.get<any>(this.backendUrl + '/api/datos/1')
  }

  modificarDatosBasicos(datosBasicos: DatosBasicos, id: number) {
    return this.http.put<any>(this.backendUrl + `/api/datos/${id}`, datosBasicos);
  }

}
