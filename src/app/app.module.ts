import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './MyComponent/header/header.component';
import { HomeComponent } from './MyComponent/home/home.component';

import { NavbarComponent } from './MyComponent/navbar/navbar.component';
import { FooterComponent } from './MyComponent/footer/footer.component';
import { AboutComponent } from './MyComponent/about/about.component';
import { ContactComponent } from './MyComponent/contact/contact.component';
import { ServicesComponent } from './MyComponent/services/services.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
