import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import * as youtubeActions from './../actions/youtube.actions';
import { YoutubeService } from '../services/youtube.service';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class YoutubeEffects {

    constructor(private actions$: Actions, private youtubeService: YoutubeService, private _snackBar: MatSnackBar) {

    }

    /**
    * Load Channels effects
    *
    * @memberof ChannelsEffects
    */
    @Effect()
    loadChannels = this.actions$.pipe(
        ofType(youtubeActions.LOAD_CHANNELS),
        mergeMap((action: youtubeActions.LoadChannels) => typeof (action.payload) != 'object' ? this.youtubeService.fetchChannels(action.payload) : this.youtubeService.fetchChannels(action.payload.query, action.payload.pageToken)),
        map(channels => new youtubeActions.LoadChannelsSuccess(channels)),
        catchError(err => {
            this._snackBar.open(err.message, '', {
                duration: 5000,
            });
            return of(new youtubeActions.LoadChannelsFail({ error: err.message }))
        }
        )
    );

    @Effect()
    getChannel = this.actions$.pipe(
        ofType(youtubeActions.VIEW_CHANNEL),
        map((action: youtubeActions.ViewChannel) => action.payload),
        mergeMap(channelId => this.youtubeService.getChannel(channelId)),
        map(channel => new youtubeActions.ViewChannelSuccess(channel)),
        catchError(err => {
            this._snackBar.open(err.message, '', {
                duration: 5000,
            });
            return of(new youtubeActions.ViewChannelFail({ error: err.message }))
        }
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
        mergeMap((action: youtubeActions.LoadVideos) => typeof (action.payload) != 'object' ? this.youtubeService.fetchVideos(action.payload) : this.youtubeService.fetchVideos(action.payload.query, action.payload.pageToken)),
        map(videos => new youtubeActions.LoadVideosSuccess(videos)),
        catchError(err => {
            this._snackBar.open(err.message, '', {
                duration: 5000,
            });
            return of(new youtubeActions.LoadVideosFail({ error: err.message }))
        }
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
        mergeMap((action: youtubeActions.LoadChannelStatistics) => this.youtubeService.fetchChannelStatistics(action.payload)),
        map(stat => new youtubeActions.LoadChannelStatisticsSuccess(stat)),
        catchError(err => {
            this._snackBar.open(err.message, '', {
                duration: 5000,
            });
            return of(new youtubeActions.LoadChannelStatisticsFail({ error: err.message }))
        }
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
        mergeMap((action: youtubeActions.LoadChannelVideos) => this.youtubeService.fetchChannelVideos(action.payload)),
        map(videos => new youtubeActions.LoadChannelVideosSuccess(videos)),
        catchError(err => {
            this._snackBar.open(err.message, '', {
                duration: 5000,
            });
            return of(new youtubeActions.LoadChannelVideosFail({ error: err.message }))
        }
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
        mergeMap((action: youtubeActions.LoadChannelPlaylists) => this.youtubeService.fetchChannelPlaylists(action.payload)),
        map(playlists => new youtubeActions.LoadChannelPlaylistsSuccess(playlists)),
        catchError(err => {
            this._snackBar.open(err.message, '', {
                duration: 5000,
            });
            return of(new youtubeActions.LoadChannelPlaylistsFail({ error: err.message }))
        }
        )
    );


    /**
    * Search Channels effects
    *
    * @memberof ChannelsEffects
    */
    @Effect()
    searchChannels = this.actions$.pipe(
        ofType(youtubeActions.SEARCH_CHANNELS),
        mergeMap((action: youtubeActions.SearchChannels) => this.youtubeService.fetchChannels(action.payload)),
        map(channels => new youtubeActions.SearchChannelsSuccess(channels)),
        catchError(err => {
            this._snackBar.open(err.message, '', {
                duration: 5000,
            });
            return of(new youtubeActions.SearchChannelsFail({ error: err.message }))
        }
        )
    );

    /**
    * Search Channels effects
    *
    * @memberof ChannelsEffects
    */
    @Effect()
    searchVideos = this.actions$.pipe(
        ofType(youtubeActions.SEARCH_VIDEOS),
        mergeMap((action: youtubeActions.SearchVideos) => this.youtubeService.fetchVideos(action.payload)),
        map(videos => new youtubeActions.SearchVideosSuccess(videos)),
        catchError(err => {
            this._snackBar.open(err.message, '', {
                duration: 5000,
            });
            return of(new youtubeActions.SearchVideosFail({ error: err.message }))
        }
        )
    );
}