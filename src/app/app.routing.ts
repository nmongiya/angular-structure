
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, RouterOutlet, RouterLink, RouterLinkActive, RouterLinkWithHref } from '@angular/router';

import { DashboardComponent } from './dashboard-module/dashboard.component';
import { AuditModuleComponent } from './audit-module/audit-module.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'audit', component: AuditModuleComponent },


];

export const appRoutingProviders: any[] = [

];



export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
