import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromYoutube from './youtube.reducer';
import * as fromRoot from './../../core/reducers'

export interface YoutubeState {
    youtube: fromYoutube.State
}

export interface State extends fromRoot.State {
    'youtubeState': YoutubeState;
}

export const reducers = {
    youtube: fromYoutube.reducer
}

// Select the review slice feature from the state
export const getYoutubeState = createFeatureSelector<YoutubeState>('youtube');

export const getYoutube = createSelector(getYoutubeState,
    (state: YoutubeState) => state.youtube);

export const getChannels = createSelector(getYoutube,
    (state: fromYoutube.State) => state.channels);

export const getLoading = createSelector(getYoutube,
    (state: fromYoutube.State) => state.loading);

export const getSelectedChannel = createSelector(getYoutube,
    (state: fromYoutube.State) => state.selectedChannel);

export const getVideos = createSelector(getYoutube,
    (state: fromYoutube.State) => state.videos);

export const getSelectedChannelStats = createSelector(getYoutube,
    (state: fromYoutube.State) => state.selectedChannel ? state.selectedChannel.statistics : {});

export const getSelectedChannelVideos = createSelector(getYoutube,
    (state: fromYoutube.State) => state.selectedChannel ? state.selectedChannel.videos : []);

export const getSelectedChannelPlaylists = createSelector(getYoutube,
    (state: fromYoutube.State) => state.selectedChannel ? state.selectedChannel.playlists : []);