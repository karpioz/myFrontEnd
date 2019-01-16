import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

// import our services
import {AuthLoginService} from './service/auth-login.service';
import {AuthRegisterService} from './service/auth-register.service';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AuthRegisterService,
              AuthLoginService
  ], // our service providers
  bootstrap: [AppComponent]
})
export class AppModule { }
