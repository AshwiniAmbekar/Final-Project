
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Claim } from './claim';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ClaimInsuranceService {

  constructor(private http: HttpClient) {

  }

  claimInsuranceFromServer(claiminsurances: Claim): Observable<String> {
    let url = "http://localhost:8186/claim/add";
    return this.http.post<String>(url, claiminsurances);

  }

  fetchAllTheClaims(): Observable<Claim[]> {
    let url = "http://localhost:8186/claim/fetch/all";
    return this.http.get<Claim[]>(url);
  }


}
