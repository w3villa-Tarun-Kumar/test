import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { HeaderComponent } from './header/header.component';
import { UserpanelModule } from './userpanel/userpanel.module';
import { UserpanelComponent } from './userpanel/userpanel.component'
import { HttpClientModule } from '@angular/common/http';
import { SignupService } from './signup.service'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserpanelModule,
    HttpClientModule,
    LoginModule,
    BrowserAnimationsModule
  ],
  providers: [SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
