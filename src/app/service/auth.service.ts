import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
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

  obtenerToken(): string | null{
    return localStorage.getItem(this.tokenKey);
  }

  limpiarToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  async login(credenciales: Credenciales): Promise<boolean> {
    try {
      const respuesta = await firstValueFrom(this.http.post<any>(this.url + '/auth/login', credenciales));
      this.guardarToken(respuesta.token);
      return true;
    } catch (error) {
      return false;
    }
  }

}
