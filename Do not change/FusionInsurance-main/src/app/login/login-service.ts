import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './login';
import { Observable } from 'rxjs';
import { Response } from '../response/response';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LoginService {
  login: Login[];
  
  constructor(private http: HttpClient) {
  }

  verifyMe(login: Login) : Observable<Response> {
    let url = 'http://localhost:8186/login/verify';
    return this.http.post<Response>(url, login);

  }
}
