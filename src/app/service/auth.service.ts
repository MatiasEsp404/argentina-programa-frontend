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
  private url = `${environment.API_URL}/api/auth`

  constructor(
    private http: HttpClient
  ) { }

  guardarToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  obtenerToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  limpiarToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  estaLogueado(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  login(credenciales: Credenciales): Observable<any> {
    return this.http.post<any>(this.url + '/login', credenciales)
  }

  me() {
    return this.http.get<any>(this.url + '/me')
  }

}
