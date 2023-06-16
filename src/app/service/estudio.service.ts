
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  constructor(
    private http: HttpClient
  ) { }

  private backendUrl = 'http://localhost:8080'

  obtenerEstudios() {
    return this.http.get<any>(this.backendUrl + '/api/estudio')
  }

}
