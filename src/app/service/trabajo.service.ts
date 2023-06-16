import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrabajoService {

  constructor(
    private http: HttpClient
  ) { }

  private backendUrl = 'http://localhost:8080'

  obtenerTrabajos() {
    return this.http.get<any>(this.backendUrl + '/api/trabajo')
  }

}
