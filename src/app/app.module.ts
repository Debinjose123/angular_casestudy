import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

import { StockListComponent } from './portfolio/stock-list/stock-list.component';
import { CardComponent } from './portfolio/card/card.component';
import { CardItemsComponent } from './portfolio/card/card-items/card-items.component';
import { StockItemsComponent } from './portfolio/stock-list/stock-items/stock-items.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SupportComponent } from './support/support.component';
import { HttpClientModule } from '@angular/common/http';

import { RegistrationComponent } from './registration/registration.component';
import { MutualfundComponent } from './mutualfund/mutualfund.component';

import { CardMComponent } from './mutualfund/card-m/card-m.component';
import { MutualListComponent } from './mutualfund/mutual-list/mutual-list.component';
import { CardMItemsComponent } from './mutualfund/card-m/card-m-items/card-m-items.component';
import { MutualItemsComponent } from './mutualfund/mutual-list/mutual-items/mutual-items.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { InvestmentComponent } from './investment/investment.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    PortfolioComponent,
  
    StockListComponent,
    CardComponent,
    CardItemsComponent,
    StockItemsComponent,
    LoginComponent,
    RegistrationComponent,
    PageNotFoundComponent,
    SupportComponent,
    MutualfundComponent,
  
    CardMComponent,
    MutualListComponent,
    CardMItemsComponent,
    MutualItemsComponent,
    WelcomeComponent,
    InvestmentComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
