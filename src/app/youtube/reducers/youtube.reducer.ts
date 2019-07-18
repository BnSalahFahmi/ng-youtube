import * as youtubeActions from './../actions/youtube.actions';
import * as fromRoot from '../../core/reducers';

export interface State {
    loading: boolean,
    channels: any,
    selectedChannel: any,
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
            return { ...state, selectedChannel: action.payload.items[0], loading: false };
        case youtubeActions.LOAD_VIDEOS:
            return { ...state, loading: true };
        case youtubeActions.LOAD_VIDEOS_SUCCESS:
            return { ...state, videos: action.payload.items, loading: false };
        default:
            return state;
    }
}
