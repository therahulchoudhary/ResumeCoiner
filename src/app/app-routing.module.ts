import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClassicComponent} from './classic/classic.component';
import {LiteComponent} from './lite/lite.component';
import {LandingComponent} from './landing/landing.component';
const routes: Routes = [
{ path: '', redirectTo: '/landing', pathMatch: 'full' },
{ path: 'landing', component: LandingComponent },
{ path: 'classic', component: ClassicComponent },
{ path: 'lite', component:LiteComponent }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes) 
  ],exports: [ RouterModule ]
  
})
export class AppRoutingModule { }
