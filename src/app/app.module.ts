import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Modulos
import { LoginModule } from './init/login/login.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

// Enrutamiento
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { AlertsComponent } from './shared/components/alerts/alerts.component';
import { LoginService } from './shared/services/login/login.service';
import { AuthenticationService } from './shared/services/login/authentication.service';
import { AlertService } from './shared/services/alert.service';
import { JwtInterceptor } from './shared/interceptors/jwt.interceptor';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';
import { fakeBackendProvider } from './shared/fakeBE/fake-backend';

@NgModule({
  declarations: [
    AppComponent,
    AlertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HttpClientModule
  ],
  providers: [
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
