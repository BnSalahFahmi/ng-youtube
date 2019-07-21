import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromYoutube from './../../reducers/index';
import * as youtubeActions from './../../actions/youtube.actions';
import { Store } from '@ngrx/store';
import { YoutubeService } from '@app/youtube/services/youtube.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-channel-item',
  templateUrl: './channel-item.component.html',
  styleUrls: ['./channel-item.component.scss']
})
export class ChannelItemComponent implements OnInit, AfterViewInit {

  channel$: Observable<any>;
  stats$: Observable<any>;
  videos$: Observable<any>;
  playlists$: Observable<any>;
  loading$: Observable<boolean>;

  constructor(private store: Store<fromYoutube.State>, private youtubeService: YoutubeService, private route: ActivatedRoute, public sanitizer: DomSanitizer) {
    this.channel$ = this.store.select(fromYoutube.getSelectedChannel);
    this.loading$ = this.store.select(fromYoutube.getLoading);
    this.stats$ = this.store.select(fromYoutube.getSelectedChannelStats);
    this.videos$ = this.store.select(fromYoutube.getSelectedChannelVideos);
    this.playlists$ = this.store.select(fromYoutube.getSelectedChannelPlaylists);
  }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    const channelId = this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new youtubeActions.LoadChannelStatistics(channelId));
  }

  onTabClick(event, channelId) {
    if (event.tab.textLabel == "Acceuil") {
      this.store.dispatch(new youtubeActions.LoadChannelStatistics(channelId));
    } else if (event.tab.textLabel == "Videos") {
      this.store.dispatch(new youtubeActions.LoadChannelVideos(channelId));
    } else if (event.tab.textLabel == "Playlists") {
      this.store.dispatch(new youtubeActions.LoadChannelPlaylists(channelId));
    }
  }

  getIFrameSrc(embedHtml: string) {
    let url = embedHtml.split('"')[5];
    return "https:" + url;
  }

}
