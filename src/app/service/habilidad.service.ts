import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  constructor(
    private http: HttpClient
  ) { }

  private backendUrl = 'http://localhost:8080'

  obtenerHabilidades() {
    return this.http.get<any>(this.backendUrl + '/api/habilidad')
  }

}
