import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

// import our services
import {AuthLoginService} from './service/auth-login.service';
import {AlertService, AuthRegisterService} from './service/auth-register.service';
import {AppRouting} from './app/routing';
import {AuthGuard} from './guards/auth.guard';
import {HomeComponent} from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {AlertComponent} from './directives/alert/alert.component',
import {ErrorInterceptorProvider} from './services/helper/error.interceptor';
import {JwtInterceptorProvider} from './services/helper/jwt.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting,
    HttpClientModule
  ],
  // our service providers
  providers: [AuthRegisterService,
              AuthLoginService,
              AuthGuard,
              AlertService,
              JwtInterceptorProvider,
              ErrorInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
