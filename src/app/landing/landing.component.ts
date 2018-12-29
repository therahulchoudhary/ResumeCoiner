import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }
  classic(){
    this._router.navigate(['/classic']);
  }
  lite(){
    this._router.navigate(['/lite']);
  }
  noob(){
    this._router.navigate(['/noob']);
  }
}
