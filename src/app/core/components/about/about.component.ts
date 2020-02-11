import { Component } from '@angular/core';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/shared/animations/route.animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  dependencies: any;
  features: any;

  constructor() {
    this.dependencies = {
      frontend: [
        { name: 'Angular 8.1.0' },
        { name: 'Angular Material 8.1.0' },
        { name: 'NgRx 8.1.0' },
        { name: 'Angular-fontawesome 0.4.0' },
        { name: 'Bootstrap 4.3.1' },
        { name: 'Lodash 4.17.15' },
        { name: 'Ngx-infinite-scroll 7.2.0'},
        { name: 'Rxjs 6.4.0' },
        { name: 'Ng-mat-search-bar 3.2.0' },
        { name: 'Youtube Data API' }
      ]
    };

    this.features = {
      frontend: [
        {
          name: 'Angular CLI',
          tutorial: 'https://angular.io/cli'
        },
        {
          name: 'Routing',
          tutorial: 'https://angular.io/tutorial/toh-pt5'
        },
        {
          name: 'Lazy loading',
          tutorial: 'https://angular.io/guide/lazy-loading-ngmodules'
        },
        {
          name: 'Bootstrap',
          tutorial: 'https://medium.com/codingthesmartway-com-blog/using-bootstrap-with-angular-c83c3cee3f4a'
        },
        {
          name: 'HTTPClient',
          tutorial: 'https://angular.io/guide/http'
        },
        {
          name: 'State Management',
          tutorial: 'https://ngrx.io/guide/store'
        },
        {
          name: 'Progressive Web App',
          tutorial: 'https://angular.io/guide/service-worker-getting-started'
        },
        {
          name: 'Components',
          tutorial: null
        },
        {
          name: 'Services',
          tutorial: null
        }
      ],
    };

  }

}