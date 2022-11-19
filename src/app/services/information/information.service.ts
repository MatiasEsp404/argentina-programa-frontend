import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Information } from '../../models/information/information';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  private baseURL = "http://localhost:8080/api/information";

  constructor(private httpClient : HttpClient) { }

  getInformation():Observable<Information>{
    return this.httpClient.get<Information>(`${this.baseURL}`);
  }
}
