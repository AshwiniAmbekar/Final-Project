import { Component } from '@angular/core';
import { BuyInsurance } from './buyinsurance';
import { BuyInsuranceService } from './buyinsurance-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyinsurance',
  templateUrl: './buyinsurance.component.html',
  styleUrls: ['./buyinsurance.component.css']
})
export class BuyinsuranceComponent  {

  buyinsurance: BuyInsurance = new BuyInsurance();
  response:string;
  

  constructor(private insuranceservice:BuyInsuranceService, private router:Router) { }

  purchase(pform){
    this.buyinsurance.registration = {
      userId : localStorage.getItem("userid")
    }

    console.log("inside purchase " + JSON.stringify(this.buyinsurance));

    if (confirm) {
      this.insuranceservice. buyInsuranceFromServer(this.buyinsurance).subscribe(data => {
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
  


