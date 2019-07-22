import * as youtubeActions from './../actions/youtube.actions';
import * as fromRoot from '../../core/reducers';
import { Channel, initChannel } from '@app/youtube/models/channel.model';
import { getSelectedChannel } from '@app/youtube/reducers';
import { Pageable, initPageable } from '@app/youtube/models/pageable.model';

export interface State {
    loading: boolean,
    channels: Pageable<Channel>,
    selectedChannel: Channel,
    videos: Pageable<object>
}

export const initialState: State = {
    loading: false,
    channels: initPageable(),
    selectedChannel: null,
    videos: initPageable()
}

export function reducer(state = initialState, action: youtubeActions.ActionType): State {
    switch (action.type) {
        case youtubeActions.LOAD_CHANNELS:
            return { ...state, loading: true };
        case youtubeActions.LOAD_CHANNELS_SUCCESS:
            let pageable = initPageable();
            var newArray = [];
            newArray.push.apply(newArray, state.channels.items);
            newArray.push.apply(newArray, action.payload.items);
            pageable.items = newArray;
            pageable.nextPageToken = action.payload.nextPageToken;
            pageable.resultsPerPage = action.payload.pageInfo.resultsPerPage;
            pageable.totalResults = action.payload.pageInfo.totalResults;
            return { ...state, channels: pageable, loading: false };
        case youtubeActions.VIEW_CHANNEL:
            return { ...state, loading: true };
        case youtubeActions.VIEW_CHANNEL_SUCCESS:
            let channel = initChannel();
            channel.data = action.payload.items[0];
            return { ...state, selectedChannel: channel, loading: false };
        case youtubeActions.LOAD_VIDEOS:
            return { ...state, loading: true };
        case youtubeActions.LOAD_VIDEOS_SUCCESS:
            var videos_pageable = initPageable();
            var newArray = [];
            newArray.push.apply(newArray, state.videos.items);
            newArray.push.apply(newArray, action.payload.items);
            videos_pageable.items = newArray;
            videos_pageable.nextPageToken = action.payload.nextPageToken;
            videos_pageable.resultsPerPage = action.payload.pageInfo.resultsPerPage;
            videos_pageable.totalResults = action.payload.pageInfo.totalResults;
            return { ...state, videos: videos_pageable, loading: false };
        case youtubeActions.LOAD_CHANNEL_STATISTICS:
            return { ...state, loading: true };
        case youtubeActions.LOAD_CHANNEL_STATISTICS_SUCCESS:
            if (state.selectedChannel) {
                let selectedChannel_1 = {
                    data: state.selectedChannel.data,
                    statistics: action.payload.items[0],
                    videos: state.selectedChannel.videos,
                    playlists: state.selectedChannel.playlists
                }
                return { ...state, selectedChannel: selectedChannel_1, loading: false };
            } else {
                return state;
            }
        case youtubeActions.LOAD_CHANNEL_VIDEOS:
            return { ...state, loading: true };
        case youtubeActions.LOAD_CHANNEL_VIDEOS_SUCCESS:
            debugger;
            if (state.selectedChannel) {
                let selectedChannel_2 = {
                    data: state.selectedChannel.data,
                    statistics: state.selectedChannel.statistics,
                    videos: action.payload.items,
                    playlists: state.selectedChannel.playlists
                }
                return { ...state, selectedChannel: selectedChannel_2, loading: false };
            } else {
                return state;
            }
        case youtubeActions.LOAD_CHANNEL_PLAYLISTS:
            return { ...state, loading: true };
        case youtubeActions.LOAD_CHANNEL_PLAYLISTS_SUCCESS:
            if (state.selectedChannel) {
                let selectedChannel_3 = {
                    data: state.selectedChannel.data,
                    statistics: state.selectedChannel.statistics,
                    videos: state.selectedChannel.videos,
                    playlists: action.payload.items
                }
                return { ...state, selectedChannel: selectedChannel_3, loading: false };
            } else {
                return state;
            }
        default:
            return state;
    }
}
