import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin-dashboard/admin.service';
import { RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AdminService]
})
export class AdminComponent implements OnInit {

  constructor(private adminService:AdminService,private routes: Router) { }
msg;
  ngOnInit() {
  }
  check(uname: string, p: string){
    var output =this.adminService.checkAdminNameAndPassword(uname, p);
    if(output==true){
      this.routes.navigate(['/app-admin-dashboard']);
    }
    else{
      this.msg='Invalid username or password';
    }
  }

}
