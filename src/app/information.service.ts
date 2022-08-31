import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Information } from './information';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  private baseURL = "https://argentina-programa-grupo-144.herokuapp.com/api/information";

  constructor(private httpClient : HttpClient) { }

  getInformation():Observable<Information>{
    return this.httpClient.get<Information>(`${this.baseURL}`);
  }
}
