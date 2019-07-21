import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromYoutube from './../../reducers/index';
import * as youtubeActions from './../../actions/youtube.actions';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'youtube-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  videos$: Observable<any>;
  loading$: Observable<boolean>;

  constructor(private store: Store<fromYoutube.State>, private youtubeService : YoutubeService, public sanitizer: DomSanitizer) {
    this.videos$ = this.store.select(fromYoutube.getVideos);
    this.loading$ = this.store.select(fromYoutube.getLoading);
  }

  ngOnInit() {
    // Dispatch the load action
    this.store.dispatch(new youtubeActions.LoadVideos());
  }

  getIFrameSrc(embedHtml: string) {
    let url = embedHtml.split('"')[5];
    return "https:" + url;
  }

}
