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
  commentCount: number = 0;
  subscriberCount: number = 0;
  videoCount: number = 0;
  viewCount: number = 0;

  constructor(private store: Store<fromYoutube.State>, private youtubeService: YoutubeService, private route: ActivatedRoute, public sanitizer: DomSanitizer) {
    this.channel$ = this.store.select(fromYoutube.getSelectedChannel);
    this.loading$ = this.store.select(fromYoutube.getLoading);
    this.videos$ = this.store.select(fromYoutube.getSelectedChannelVideos);
    this.playlists$ = this.store.select(fromYoutube.getSelectedChannelPlaylists);

    this.store.select(fromYoutube.getSelectedChannelStats).subscribe(
      (data) => {
        if (data && (data as any).statistics) {
          this.commentCount = (data as any).statistics.commentCount;
          this.subscriberCount = (data as any).statistics.subscriberCount;
          this.videoCount = (data as any).statistics.videoCount;
          this.viewCount = (data as any).statistics.viewCount;
        }
      }
    );
  }

  ngOnInit() {
    const channelId = this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new youtubeActions.LoadChannelStatistics(channelId));
  }

  ngAfterViewInit() {
    
  }

  onTabClick(event, channelId) {
    if (event.tab.textLabel == "Home") {
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
