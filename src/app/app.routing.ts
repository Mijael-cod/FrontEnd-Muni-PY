import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Homepage2Component } from './homepage2/homepage2.component';
import { LoginGuard } from './guards/login.guard';
import { OlvidarcontraComponent } from './olvidarcontra/olvidarcontra.component';
import { Olvidarcontra2Component } from './olvidarcontra2/olvidarcontra2.component';
import { Olvidarcontra3Component } from './olvidarcontra3/olvidarcontra3.component';
import { Olvidarcontra4Component } from './olvidarcontra4/olvidarcontra4.component';



const routes: Routes =[
  {
    path: '',
    component: HomepageComponent
  },
  
  {
    path: '',
    component: Homepage2Component
  },
  {
    path: 'olvidar',
    component: OlvidarcontraComponent
  },
  {
    path: 'olvidar2',
    component: Olvidarcontra2Component
  },
  {
    path: 'olvidar3',
    component: Olvidarcontra3Component
  },
  {
    path: 'olvidar4',
    component: Olvidarcontra4Component
  },
  {
    path: '',
    
    component: LoginComponent
  },
  {
    path: 'registrar',
    component: RegistrarComponent
  },
  {
    path: 'login',
    
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, 
  
  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})

export class AppRoutingModule { }
