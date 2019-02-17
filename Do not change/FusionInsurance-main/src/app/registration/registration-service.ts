
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Registration } from './registration';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RegistrationService {
  registrations: Registration[];

  constructor(private http: HttpClient) {

  }

  registerToServer(registrations: Registration): Observable<String> {
    let url = "http://localhost:8186/registration/add";
    return this.http.post<String>(url, registrations);

  }



}
