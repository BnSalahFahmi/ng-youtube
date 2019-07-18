import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';

import * as youtubeActions from './../actions/youtube.actions';
import { YoutubeService } from '../services/youtube.service';

@Injectable()
export class YoutubeEffects {

    constructor(private actions$: Actions, private youtubeService: YoutubeService) {

    }

   /**
   * Load Channels effects
   *
   * @memberof ChannelsEffects
   */
    @Effect()
    loadChannels = this.actions$.pipe(
        ofType(youtubeActions.LOAD_CHANNELS),
        mergeMap(() => this.youtubeService.fetchChannels()),
        map(channels => new youtubeActions.LoadChannelsSuccess(channels)),
        catchError(err =>
            of(new youtubeActions.LoadChannelsFail({ error: err.message }))
        )
    );

    @Effect()
    getBook = this.actions$.pipe(
        ofType(youtubeActions.VIEW_CHANNEL),
        map((action: youtubeActions.ViewChannel) => action.payload),
        mergeMap(channelId => this.youtubeService.getChannel(channelId)),
        map(channel => new youtubeActions.ViewChannelSuccess(channel)),
        catchError(err =>
            of(new youtubeActions.ViewChannelFail({ error: err.message }))
        )
    );

    /**
   * Load Videos effects
   *
   * @memberof VideosEffects
   */
  @Effect()
  loadVideos = this.actions$.pipe(
      ofType(youtubeActions.LOAD_VIDEOS),
      mergeMap(() => this.youtubeService.fetchVideos()),
      map(videos => new youtubeActions.LoadVideosSuccess(videos)),
      catchError(err =>
          of(new youtubeActions.LoadVideosFail({ error: err.message }))
      )
  );

}