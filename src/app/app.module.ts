import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard-module/dashboard.component';


import { SimPROServiceService } from './sim-proservice.service';
import { DataServiceService } from './data-service.service';

import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { SimProDGComponent } from './common/sim-pro-dg/sim-pro-dg.component';

import { AuditModuleComponent } from './audit-module/audit-module.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SimProDGComponent,
    AuditModuleComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
   

  ],
  providers: [SimPROServiceService, DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
