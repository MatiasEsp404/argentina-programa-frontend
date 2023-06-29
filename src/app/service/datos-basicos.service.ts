import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DatosBasicos } from '../model/datos-basicos';

@Injectable({
  providedIn: 'root'
})
export class DatosBasicosService {

  constructor(
    private http: HttpClient
  ) { }

  private url = `${environment.API_URL}/api/datos`
  recargarDatosBasicos = new Subject<void>();

  obtenerDatosBasicos() {
    return this.http.get<any>(this.url + '/1')
  }

  modificarDatosBasicos(datosBasicos: DatosBasicos, id: number) {
    return this.http.put<any>(this.url + id, datosBasicos);
  }

}
