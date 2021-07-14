import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { WelcomeComponent } from './welcome/welcome.component';
import { PortfolioComponent} from './portfolio/portfolio.component'
import { LoginComponent } from './login/login.component'

import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { SupportComponent } from './support/support.component';

import { RegistrationComponent } from './registration/registration.component';
import { MutualfundComponent } from './mutualfund/mutualfund.component';

import { InvestmentComponent } from './investment/investment.component';


const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'stock', component: PortfolioComponent },
  {path : 'mutual',component:MutualfundComponent},
  
  
  {path : 'support',component: SupportComponent},
  {path: 'welcome',component:WelcomeComponent},
  {path: 'invest',component:InvestmentComponent},

  { path: '**', component: PageNotFoundComponent },
  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
