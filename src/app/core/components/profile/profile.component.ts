import { Component, OnInit } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/shared/animations/route.animations';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  constructor() { }

  ngOnInit() {
  }

  onNavigate(url: string){
    var win = window.open(url, '_blank');
    win.opener = null;
    win.focus();
  }

}
