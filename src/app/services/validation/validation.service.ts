import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Information } from 'src/app/models/information/information';
import { User } from '../../models/validation/user';
import { Token } from "../../models/validation/token";

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  private basePostURL = "http://localhost:8080/api/auth/login";
  private basePatchURL = "http://localhost:8080/api/information";

  constructor(private httpClient : HttpClient) { }

  authUser(user: User){
    return this.httpClient.post<Token>(`${this.basePostURL}`, user);
  }

  patchInfo(body: Information, token: string){

    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': token
    })

    return this.httpClient.patch<Information>(`${this.basePatchURL}`, body, {'headers': headers});
  }
}
