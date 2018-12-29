import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ClassicComponent } from './classic/classic.component';
import { LiteComponent } from './lite/lite.component';
import { LandingComponent } from './landing/landing.component';
import { AppRoutingModule } from './/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import {GeneralService} from './general.service';
=======
import { NoobComponent } from './noob/noob.component';

>>>>>>> f8d353a96f7d26207e08579e818171584a29933d
@NgModule({
  declarations: [
    AppComponent,
    ClassicComponent,
    LiteComponent,
    LandingComponent,
    NoobComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [GeneralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
