import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/validation/user';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  private baseURL = "http://localhost:8080/api/auth/login";

  constructor(private httpClient : HttpClient) { }

  authUser(user: User){
    return this.httpClient.post<User>(`${this.baseURL}`, user);
  }
}
