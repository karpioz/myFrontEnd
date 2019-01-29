import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

// import our services
import {AuthLoginService} from './service/auth-login.service';
import {AlertService} from './service/alert.service';
import { AuthRegisterService} from './service/auth-register.service';
import {AppRouting} from './app.routing';
import {AuthGuard} from './guards/auth.guard';
import {HomeComponent} from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {AlertComponent} from './directives/alert/alert.component';
import {ErrorInterceptorProvider} from './services/helper/error.interceptor';
import {JwtInterceptorProvider} from './services/helper/jwt.interceptor';
import { MenuComponent } from './services/menu/menu.component';

import {MatMenuModule, MatCommonModule, MatButtonModule, MatCardModule, MatToolbarModule, MatIconModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CreateReviewComponent } from './create-review/create-review.component';
import { EditReviewComponent } from './edit-review/edit-review.component';
import { MyReviewsComponent } from './my-reviews/my-reviews.component';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WhereWeAreComponent } from './where-we-are/where-we-are.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AlertComponent,
    MenuComponent,
    CreateReviewComponent,
    EditReviewComponent,
    MyReviewsComponent,
    EditUserProfileComponent,
    CreateAdminComponent,
    UserManagementComponent,
    AboutUsComponent,
    ContactUsComponent,
    WhereWeAreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting,
    HttpClientModule,
    MatMenuModule,
    MatCommonModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
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
