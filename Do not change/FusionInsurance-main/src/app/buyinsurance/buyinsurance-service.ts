
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BuyInsurance } from './buyinsurance';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BuyInsuranceService {
buyinsurances: BuyInsurance[];

  constructor(private http: HttpClient) {

  }

  buyInsuranceFromServer(buyinsurances: BuyInsurance): Observable<String> {
    let url = "http://localhost:8186/buy/add";
    return this.http.post<String>(url, buyinsurances);

  }



}
