import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { YoutubeService } from '@app/youtube/services/youtube.service';
import * as fromYoutube from './../../../youtube/reducers/index';
import * as youtubeActions from './../../../youtube/actions/youtube.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private store: Store<fromYoutube.State>, private youtubeService: YoutubeService, private router: Router) {
  }

  ngOnInit() {
  }

  handleCloseClick(event) {
    let currentURL = this.router.url;
    if (currentURL == "/youtube/channels") {
      this.store.dispatch(new youtubeActions.SearchChannels(''));
    } else if (currentURL == "/youtube/videos") {
      this.store.dispatch(new youtubeActions.SearchVideos(''));
    }
  }

  handleEnterClick(query) {
    let currentURL = this.router.url;
    if (currentURL == "/youtube/channels") {
      this.store.dispatch(new youtubeActions.SearchChannels(query));
    } else if (currentURL == "/youtube/videos") {
      this.store.dispatch(new youtubeActions.SearchVideos(query));
    }
  }

}
