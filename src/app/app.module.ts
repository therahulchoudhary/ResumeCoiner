import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClassicComponent } from './classic/classic.component';
import { LiteComponent } from './lite/lite.component';
import { LandingComponent } from './landing/landing.component';
import { AppRoutingModule } from './/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NoobComponent } from './noob/noob.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassicComponent,
    LiteComponent,
    LandingComponent,
    NoobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
