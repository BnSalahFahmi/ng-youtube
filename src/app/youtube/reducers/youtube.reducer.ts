import * as youtubeActions from './../actions/youtube.actions';
import * as fromRoot from '../../core/reducers';

export interface State {
    loading: boolean,
    channels: any
}

export const initialState: State = {
    loading: false,
    channels: []
}

export function reducer(state = initialState, action: youtubeActions.ActionType): State {
    switch (action.type) {
        case youtubeActions.LOAD_CHANNELS:
            return {
                channels: [],
                loading: true
            }
        case youtubeActions.LOAD_CHANNELS_SUCCESS:
            return {
                channels: action.payload.items,
                loading: false
            }
        default:
            return state;
    }
}
