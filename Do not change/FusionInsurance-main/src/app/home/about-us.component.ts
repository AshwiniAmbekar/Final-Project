import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'about-us',
    templateUrl: './about-us.component.html'
  })
  
  export class AboutComponent {
    constructor( private router: Router) {}
  }