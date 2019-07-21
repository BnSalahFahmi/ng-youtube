import * as youtubeActions from './../actions/youtube.actions';
import * as fromRoot from '../../core/reducers';
import { Channel, initChannel } from '@app/youtube/models/channel.model';
import { getSelectedChannel } from '@app/youtube/reducers';

export interface State {
    loading: boolean,
    channels: any,
    selectedChannel: Channel,
    videos: any
}

export const initialState: State = {
    loading: false,
    channels: [],
    selectedChannel: null,
    videos: []
}

export function reducer(state = initialState, action: youtubeActions.ActionType): State {
    switch (action.type) {
        case youtubeActions.LOAD_CHANNELS:
            return { ...state, loading: true };
        case youtubeActions.LOAD_CHANNELS_SUCCESS:
            return { ...state, channels: action.payload.items, loading: false };
        case youtubeActions.VIEW_CHANNEL:
            return { ...state, loading: true };
        case youtubeActions.VIEW_CHANNEL_SUCCESS:
            debugger;
            let channel = initChannel();
            channel.data = action.payload.items[0];
            return { ...state, selectedChannel: channel, loading: false };
        case youtubeActions.LOAD_VIDEOS:
            return { ...state, loading: true };
        case youtubeActions.LOAD_VIDEOS_SUCCESS:
            return { ...state, videos: action.payload.items, loading: false };
        case youtubeActions.LOAD_CHANNEL_STATISTICS:
            return { ...state, loading: true };
        case youtubeActions.LOAD_CHANNEL_STATISTICS_SUCCESS:
            debugger;
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
