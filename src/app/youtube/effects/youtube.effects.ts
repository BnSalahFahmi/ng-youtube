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
    getChannel = this.actions$.pipe(
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

    /**
   * Load Channel Statistics effects
   *
   * @memberof ChannelStatisticsEffects
   */
    @Effect()
    loadChannelStatistics = this.actions$.pipe(
        ofType(youtubeActions.LOAD_CHANNEL_STATISTICS),
        mergeMap((action) => this.youtubeService.fetchChannelStatistics((action as any).payload)),
        map(stat => new youtubeActions.LoadChannelStatisticsSuccess(stat)),
        catchError(err =>
            of(new youtubeActions.LoadChannelStatisticsFail({ error: err.message }))
        )
    );


    /**
   * Load Channel Videos effects
   *
   * @memberof ChannelVideosEffects
   */
    @Effect()
    loadChannelVideos = this.actions$.pipe(
        ofType(youtubeActions.LOAD_CHANNEL_VIDEOS),
        mergeMap((action) => this.youtubeService.fetchChannelVideos((action as any).payload)),
        map(videos => new youtubeActions.LoadChannelVideosSuccess(videos)),
        catchError(err =>
            of(new youtubeActions.LoadChannelVideosFail({ error: err.message }))
        )
    );

    /**
   * Load Channel Playlists effects
   *
   * @memberof ChannelPlaylistsEffects
   */
    @Effect()
    loadChannelPlaylists = this.actions$.pipe(
        ofType(youtubeActions.LOAD_CHANNEL_PLAYLISTS),
        mergeMap((action) => this.youtubeService.fetchChannelPlaylists((action as any).payload)),
        map(playlists => new youtubeActions.LoadChannelPlaylistsSuccess(playlists)),
        catchError(err =>
            of(new youtubeActions.LoadChannelPlaylistsFail({ error: err.message }))
        )
    );

}