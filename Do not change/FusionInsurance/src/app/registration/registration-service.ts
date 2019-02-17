
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Registration } from './registration';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RegistrationService {
  registrations: Registration[];

  constructor(private http: HttpClient) {

  }

  registerToServer(registrations: Registration): Observable<String> {
    let url = "http://localhost:8190/registrationentity/add";
    return this.http.post<String>(url, registrations);

  }



}
