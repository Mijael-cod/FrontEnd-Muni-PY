import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ServiceService } from 'app/Service/service.service';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OlvidarcontraComponent } from './olvidarcontra/olvidarcontra.component';
import { Olvidarcontra2Component } from './olvidarcontra2/olvidarcontra2.component';
import { Olvidarcontra3Component } from './olvidarcontra3/olvidarcontra3.component';
import { Olvidarcontra4Component } from './olvidarcontra4/olvidarcontra4.component';


@NgModule({
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,

    
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    RegistrarComponent,
    HomepageComponent,
    OlvidarcontraComponent,
    Olvidarcontra2Component,
    Olvidarcontra3Component,
    Olvidarcontra4Component

  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
