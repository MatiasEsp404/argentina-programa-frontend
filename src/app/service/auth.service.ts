import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { Credenciales } from '../model/credenciales';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenKey = 'accessToken';
  private url = 'http://localhost:8080/api';

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
    return this.http.post<any>(this.url + '/auth/login', credenciales)
  }

  me() {
    return this.http.get<any>(this.url + '/auth/me')
  }

}
