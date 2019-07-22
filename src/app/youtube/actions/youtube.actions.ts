import { Action } from '@ngrx/store';

export const LOAD_CHANNELS = '[Youtube Channels] load';
export const LOAD_CHANNELS_SUCCESS = '[Youtube Channels] load success';
export const LOAD_CHANNELS_FAIL = '[Youtube Channels] load fail';

export const VIEW_CHANNEL = '[Youtube Channel] view';
export const VIEW_CHANNEL_SUCCESS = '[Youtube Channel] view success';
export const VIEW_CHANNEL_FAIL = '[Youtube Channel] view fail';

export const LOAD_CHANNEL_STATISTICS = '[Youtube Channel] load statistics';
export const LOAD_CHANNEL_STATISTICS_SUCCESS = '[Youtube Channel] load statistics success';
export const LOAD_CHANNEL_STATISTICS_FAIL = '[Youtube Channel] load statistics fail';

export const LOAD_CHANNEL_VIDEOS = '[Youtube Channel] load videos';
export const LOAD_CHANNEL_VIDEOS_SUCCESS = '[Youtube Channel] load videos success';
export const LOAD_CHANNEL_VIDEOS_FAIL = '[Youtube Channel] load videos fail';

export const LOAD_CHANNEL_PLAYLISTS = '[Youtube Channel] load playlists';
export const LOAD_CHANNEL_PLAYLISTS_SUCCESS = '[Youtube Channel] load playlists success';
export const LOAD_CHANNEL_PLAYLISTS_FAIL = '[Youtube Channel] load playlists fail';

export const LOAD_VIDEOS = '[Youtube Videos] load channel videos';
export const LOAD_VIDEOS_SUCCESS = '[Youtube Videos] load channel videos success';
export const LOAD_VIDEOS_FAIL = '[Youtube Videos] load channel videos fail';

/**
 * Load Channels Actions
 */
export class LoadChannels implements Action {
    readonly type = LOAD_CHANNELS;

    constructor(public payload: any) { }
}

export class LoadChannelsSuccess implements Action {
    readonly type = LOAD_CHANNELS_SUCCESS;

    constructor(public payload: any) { }
}

export class LoadChannelsFail implements Action {
    readonly type = LOAD_CHANNELS_FAIL;

    constructor(public payload: any) { }
}

export class ViewChannel implements Action {
    readonly type = VIEW_CHANNEL;

    constructor(public payload: any) {

    }

}

export class ViewChannelSuccess implements Action {
    readonly type = VIEW_CHANNEL_SUCCESS;

    constructor(public payload?: any) {

    }

}
export class ViewChannelFail implements Action {
    readonly type = VIEW_CHANNEL_FAIL;

    constructor(public payload?: any) {

    }

}


/**
 * Load Channels Staistics Actions
 */
export class LoadChannelStatistics implements Action {
    readonly type = LOAD_CHANNEL_STATISTICS;

    constructor(public payload: any) {

    }
}

export class LoadChannelStatisticsSuccess implements Action {
    readonly type = LOAD_CHANNEL_STATISTICS_SUCCESS;

    constructor(public payload: any) { }
}

export class LoadChannelStatisticsFail implements Action {
    readonly type = LOAD_CHANNEL_STATISTICS_FAIL;

    constructor(public payload: any) { }
}

/**
 * Load Channels Videos Actions
 */
export class LoadChannelVideos implements Action {
    readonly type = LOAD_CHANNEL_VIDEOS;

    constructor(public payload: any) {

    }
}

export class LoadChannelVideosSuccess implements Action {
    readonly type = LOAD_CHANNEL_VIDEOS_SUCCESS;

    constructor(public payload: any) { }
}

export class LoadChannelVideosFail implements Action {
    readonly type = LOAD_CHANNEL_VIDEOS_FAIL;

    constructor(public payload: any) { }
}

/**
 * Load Channels Playlists Actions
 */
export class LoadChannelPlaylists implements Action {
    readonly type = LOAD_CHANNEL_PLAYLISTS;

    constructor(public payload: any) {

    }
}

export class LoadChannelPlaylistsSuccess implements Action {
    readonly type = LOAD_CHANNEL_PLAYLISTS_SUCCESS;

    constructor(public payload: any) { }
}

export class LoadChannelPlaylistsFail implements Action {
    readonly type = LOAD_CHANNEL_PLAYLISTS_FAIL;

    constructor(public payload: any) { }
}

/**
 * Load Videos Actions
 */
export class LoadVideos implements Action {
    readonly type = LOAD_VIDEOS;

    constructor(public payload: any) { }
}

export class LoadVideosSuccess implements Action {
    readonly type = LOAD_VIDEOS_SUCCESS;

    constructor(public payload: any) { }
}

export class LoadVideosFail implements Action {
    readonly type = LOAD_VIDEOS_FAIL;

    constructor(public payload: any) { }
}


// export a new type that represents the youtube actions 
export type ActionType = LoadChannels | LoadChannelsSuccess | LoadChannelsFail |
ViewChannel | ViewChannelSuccess | ViewChannelFail |
LoadChannelStatistics | LoadChannelStatisticsSuccess | LoadChannelStatisticsFail | 
LoadChannelVideos | LoadChannelVideosSuccess | LoadChannelVideosFail |
LoadChannelPlaylists | LoadChannelPlaylistsSuccess | LoadChannelPlaylistsFail |
LoadVideos | LoadVideosSuccess | LoadVideosFail;