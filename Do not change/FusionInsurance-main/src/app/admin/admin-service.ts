import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AdminService {
  admin: Admin[];
  
  constructor(private http: HttpClient) {
  }

  verifyAdmin(admin:Admin) : Observable<boolean> {
    let url = 'http://localhost:8186/adminlogin/verify';
    return this.http.post<boolean>(url, admin);

  }
}
