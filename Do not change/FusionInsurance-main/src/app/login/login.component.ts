import { Component, ɵConsole } from '@angular/core';
import { Login } from '../login/login';
import { LoginService } from './login-service';
import { Router } from '@angular/router';
import { Response } from '../response/response';


@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  login: Login = new Login();
  
  constructor(private loginService: LoginService, private router: Router) {

  }

  verifyUser() {
    
    this.loginService.verifyMe(this.login)
      .subscribe(data=> {
       
    if (data.responseType == "VERIFIED") {
      window.localStorage.setItem('email',data.email);
      localStorage.setItem('name', data.name);
      localStorage.setItem('userid', ""+data.userid);
      this.router.navigate(['./app-dashboard']);
    }
    else {
     
      this.router.navigate(['./registration-detail']);
      
    }
      })



  }
}