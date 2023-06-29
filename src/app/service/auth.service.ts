import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Credenciales } from '../model/credenciales';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenKey = 'accessToken';
  private url = `${environment.API_URL}/auth`

  constructor(
    private http: HttpClient
  ) { }

  private codificar(token: string): string {
    const tokenCodificado = btoa(token);
    return window.atob(tokenCodificado);
  }

  private decodificar(tokenCodificado: string): string {
    const token = window.atob(tokenCodificado);
    return atob(token);
  }

  guardarToken(token: string): void {
    localStorage.setItem(this.codificar(this.tokenKey), this.codificar(token));
  }

  obtenerToken(): string | null {
    let tokenCodificado = localStorage.getItem(this.codificar(this.tokenKey));
    if (tokenCodificado) {
      return this.decodificar(tokenCodificado);
    }
    return null;
  }

  limpiarToken(): void {
    localStorage.removeItem(this.codificar(this.tokenKey));
  }

  estaLogueado(): boolean {
    return !!localStorage.getItem(this.codificar(this.tokenKey));
  }

  login(credenciales: Credenciales): Observable<any> {
    return this.http.post<any>(this.url + '/login', credenciales)
  }

  me() {
    return this.http.get<any>(this.url + '/me')
  }

}
