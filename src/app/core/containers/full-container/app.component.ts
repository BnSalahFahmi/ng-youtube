import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { routeAnimations } from '../../../shared/animations/route.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent {

}
