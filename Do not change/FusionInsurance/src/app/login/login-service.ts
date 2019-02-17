import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './login';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LoginService {
  login: Login[];
  
  constructor(private http: HttpClient) {
  }

  loginFromServer(login: Login) :Observable<String>{
    let url = 'http://localhost:8281/login';
    return this.http.post<String>(url, login);

  }
}
