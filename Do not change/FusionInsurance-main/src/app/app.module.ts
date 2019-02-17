import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RegistrationService } from './registration/registration-service';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { LoginService } from './login/login-service';
import { LoginComponent } from './login/login.component';
import { BuyinsuranceComponent } from './buyinsurance/buyinsurance.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './home/about-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ClaimInsuranceComponent } from './claim-insurance/claim-insurance.component';
import { SuccessfulComponent } from './successful/successful.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ComprehensiveComponent } from './comprehensive/comprehensive.component';
import { ThirdPartyComponent } from './third-party/third-party.component';
import { PremiumCalculatorComponent } from './premium-calculator/premium-calculator.component';
import { TwoWheelerComponent } from './two-wheeler/two-wheeler.component';
import { FourWheelerComponent } from './four-wheeler/four-wheeler.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminService } from './admin-dashboard/admin-dashboard-service';
import { ResponseComponent } from './response/response.component';
import { BuyInsuranceService } from './buyinsurance/buyinsurance-service';
import { ClaimInsuranceService } from './claim-insurance/claim-insurance-service';



@NgModule({
  declarations: [
    AppComponent,HomeComponent,
    RegistrationComponent,LoginComponent, 
    BuyinsuranceComponent,AboutComponent, DashboardComponent, AdminComponent, 
    ClaimInsuranceComponent, SuccessfulComponent, AdminDashboardComponent, 
    ComprehensiveComponent, ThirdPartyComponent, PremiumCalculatorComponent, 
    TwoWheelerComponent, FourWheelerComponent, PaymentComponent, ResponseComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'registration-detail',component:RegistrationComponent},
      {path:'user-login',component:LoginComponent},
      {path:'about-us',component:AboutComponent},
      {path:'app-buyinsurance',component:BuyinsuranceComponent},
      //{path:'app-renew',component:RenewComponent},
      {path:'app-claim',component:ClaimInsuranceComponent},
      {path:'app-admin',component:AdminComponent},
      {path:'app-successful',component:SuccessfulComponent},
      {path:'app-dashboard',component:DashboardComponent},
      {path:'app-home',component:HomeComponent},
      {path:'app-comprehensive',component:ComprehensiveComponent},
      {path:'app-third-party',component:ThirdPartyComponent},
      {path:'app-two-wheeler',component:TwoWheelerComponent},
      {path:'app-four-wheeler',component:FourWheelerComponent},
      {path:'app-premium-calculator',component:PremiumCalculatorComponent},
      {path:'app-payment',component:PaymentComponent},
      {path:'app-admin-dashboard',component:AdminDashboardComponent}
    ])
  ],
  providers: [HttpClient,RegistrationService,LoginService,AdminService,BuyInsuranceService, ClaimInsuranceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
