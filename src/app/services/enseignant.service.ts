import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  constructor(private http : HttpClient) { }

  getEnseignants() : Observable<object>
  {
    return this.http.get("http://localhost:8050/enseignants");
  }
}
