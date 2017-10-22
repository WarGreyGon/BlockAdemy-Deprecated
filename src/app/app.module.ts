import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { GarageComponent } from './components/garage/garage.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    GarageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
        { path: 'index', component: IndexComponent },
        { path: 'login', component: LoginComponent },
        { path: 'garage', component: GarageComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }