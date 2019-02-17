import { Component } from '@angular/core';
import { Registration } from './registration'
import { RegistrationService } from './registration-service'
import { Router } from '@angular/router';

@Component({
  selector: 'registration-detail',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {

  registration: Registration = new Registration();
  response: string;
  check: Boolean;
  confirmpass: string;
  array = { password: "", msg: "" };

  constructor(private registrationService: RegistrationService, private router: Router) {

  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  userRegistration() {
    let name = true
    let confirm = true;
    if (this.confirmpass != this.registration.password) {
      confirm = false;
      this.array['password'] = "Passwords do not match";
    }
  }

  Registration(pform) {
    if (confirm) {
      this.registrationService.registerToServer(this.registration).subscribe(data => {
        this.response = data['status'];

        if (this.response = 'true') {
          console.log("inside if");
          this.router.navigate(['./app-successful']);

        }
        else {
          console.log("inside else");
          this.router.navigate(['./home-page']);

        }
      });
    }

  }

}
