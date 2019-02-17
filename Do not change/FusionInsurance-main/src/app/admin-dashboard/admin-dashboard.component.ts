import { Component, OnInit } from '@angular/core';
import { Claim } from '../claim-insurance/claim';
import { ClaimInsuranceService } from '../claim-insurance/claim-insurance-service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  claims: Claim[];

  constructor(private claimInsuranceService: ClaimInsuranceService) { }

  ngOnInit() {
    this.claimInsuranceService.fetchAllTheClaims().subscribe(data => {
      this.claims = data;
    })
  }

}
