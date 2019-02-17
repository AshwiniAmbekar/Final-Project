import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from './admin';
import { AdminService } from './admin-service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AdminService]
})

export class AdminComponent  {

  admin: Admin = new Admin();
  response:boolean;
  userName:string;
  password:string;
  submitted:boolean;
  
  constructor(private adminService: AdminService, private router: Router) {

  }

  add(pform) {
    this.adminService.verifyAdmin(this.admin)
    .subscribe(data=> {
      this.response=data;
      var check=this.response;
      console.log("====" + check);

      if(check == true){
        this.router.navigate(['./app-admin-dashboard']);
      }
      else{
        alert("Please check the username or password");
        this.router.navigate(['./app-admin']);
      }
    })
    
}
}