import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromYoutube from './../../reducers/index';
import * as youtubeActions from './../../actions/youtube.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChannelListComponent implements OnInit {

  channels$: Observable<any>;
  loading$: Observable<boolean>;

  constructor(private store: Store<fromYoutube.State>, private youtubeService : YoutubeService) {
    this.channels$ = this.store.select(fromYoutube.getChannels);
    this.loading$ = this.store.select(fromYoutube.getLoading);
  }

  ngOnInit() {
    // Dispatch the load action
    this.store.dispatch(new youtubeActions.LoadChannels());
  }

}
