import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromYoutube from './../../reducers/index';
import * as youtubeActions from './../../actions/youtube.actions';
import { Store } from '@ngrx/store';
import { YoutubeService } from '@app/youtube/services/youtube.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ROUTE_ANIMATIONS_ELEMENTS } from '@app/shared/animations/route.animations';

@Component({
  selector: 'app-channel-item',
  templateUrl: './channel-item.component.html',
  styleUrls: ['./channel-item.component.scss']
})
export class ChannelItemComponent {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  channel$: Observable<any>;
  stats$: Observable<any>;
  videos$: Observable<any>;
  playlists$: Observable<any>;
  loading$: Observable<boolean>;
  commentCount: number = 0;
  subscriberCount: number = 0;
  videoCount: number = 0;
  viewCount: number = 0;
  selectedVideo: string;
  showVideoPlayer = false;

  constructor(private store: Store<fromYoutube.State>, private youtubeService: YoutubeService, private route: ActivatedRoute, public sanitizer: DomSanitizer) {
    this.channel$ = this.store.select(fromYoutube.getSelectedChannel);
    this.loading$ = this.store.select(fromYoutube.getLoading);
    this.videos$ = this.store.select(fromYoutube.getSelectedChannelVideos);
    this.playlists$ = this.store.select(fromYoutube.getSelectedChannelPlaylists);
  }

  onTabClick(event, channelId) {
    if (event.tab.textLabel == "Home") {
      this.store.dispatch(new youtubeActions.LoadChannelStatistics(channelId));
    } else if (event.tab.textLabel == "Videos") {
      this.store.dispatch(new youtubeActions.LoadChannelVideos(channelId));
    }
  }

  getIFrameSrc(embedHtml: string) {
    let url = embedHtml.split('"')[5];
    return "https:" + url;
  }

  onPlayVideo(embedHtml: string) {
    this.selectedVideo = this.getIFrameSrc(embedHtml);
    this.showVideoPlayer = true;
  }

  closeVideoPlayer() {
    this.selectedVideo = undefined;
    this.showVideoPlayer = false;
  }


}
