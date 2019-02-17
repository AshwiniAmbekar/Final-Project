import { Component, OnInit } from '@angular/core';
import { Claim } from './claim';
import { Router } from '@angular/router';
import { ClaimInsuranceService } from './claim-insurance-service';

@Component({
  selector: 'app-claim-insurance',
  templateUrl: './claim-insurance.component.html',
  styleUrls: ['./claim-insurance.component.css']
})
export class ClaimInsuranceComponent {

  claiminsurance: Claim = new Claim();
  response:string;
  

  constructor(private insuranceservice:ClaimInsuranceService, private router:Router) { }

  claim(){
  
    this.claiminsurance.registration = {
      userId : localStorage.getItem("userid")
    }


    if (confirm) {
      this.insuranceservice. claimInsuranceFromServer(this.claiminsurance).subscribe(data => {
        this.response = data['status'];

        if (this.response = 'true') {
          console.log("if");
          this.router.navigate(['./app-payment']);

        }
        else {
          console.log("else");
          this.router.navigate(['./app-home']);

        }
      });
    }
  }

 

}
