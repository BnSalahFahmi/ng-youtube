import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { routeAnimations } from '../../../shared/animations/route.animations';
import { Store } from '@ngrx/store';
import { YoutubeService } from '@app/youtube/services/youtube.service';
import * as fromYoutube from './../../../youtube/reducers/index';
import * as youtubeActions from './../../../youtube/actions/youtube.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit {

  currentPage: String = null;

  constructor(private store: Store<fromYoutube.State>, private youtubeService: YoutubeService, private router: Router) {

  }

  ngOnInit() {

  }

  searchMore() {
    let currentUrl = this.router.url;
    if (currentUrl == "/youtube/channels") {
      this.store.select(fromYoutube.getChannelsNextPageToken).subscribe(
        (data) => {
          this.currentPage = data;
        });
      this.store.dispatch(new youtubeActions.LoadChannels(this.currentPage));
    } else if (currentUrl == "/youtube/videos") {
      this.store.select(fromYoutube.getVideosNextPageToken).subscribe(
        (data) => {
          this.currentPage = data;
        });
      this.store.dispatch(new youtubeActions.LoadVideos(this.currentPage));
    }
  }
}
