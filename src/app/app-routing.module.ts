import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClassicComponent} from './classic/classic.component';
import {LiteComponent} from './lite/lite.component';
import {LandingComponent} from './landing/landing.component';
import {NoobComponent} from './noob/noob.component';
const routes: Routes = [
{ path: '', redirectTo: '/landing', pathMatch: 'full' },
{ path: 'landing', component: LandingComponent },
{ path: 'classic', component: ClassicComponent },
{ path: 'lite', component:LiteComponent },
{ path: 'noob', component:NoobComponent }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes) 
  ],exports: [ RouterModule ]
  
})
export class AppRoutingModule { }
