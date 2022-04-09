import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private http : HttpClient) { }

  getEtudiants() : Observable<object>
  {
    return this.http.get("http://localhost:8050/etudiants");
  }
}
