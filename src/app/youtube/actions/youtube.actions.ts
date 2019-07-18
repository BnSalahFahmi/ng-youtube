import { Action } from '@ngrx/store';

export const LOAD_CHANNELS = '[Youtube Channels] load';
export const LOAD_CHANNELS_SUCCESS = '[Youtube Channels] load Success';
export const LOAD_CHANNELS_FAIL = '[Youtube Channels] load Fail';

export const VIEW_CHANNEL = '[Youtube Channel] view';
export const VIEW_CHANNEL_SUCCESS = '[Youtube Channel] view success';
export const VIEW_CHANNEL_FAIL = '[Youtube Channel] view fail';

export const LOAD_VIDEOS = '[Youtube Videos] load';
export const LOAD_VIDEOS_SUCCESS = '[Youtube Videos] load Success';
export const LOAD_VIDEOS_FAIL = '[Youtube Videos] load Fail';

/**
 * Load Channels Actions
 */
export class LoadChannels implements Action {
    readonly type = LOAD_CHANNELS;
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
 * Load Videos Actions
 */
export class LoadVideos implements Action {
    readonly type = LOAD_VIDEOS;
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
LoadVideos | LoadVideosSuccess | LoadVideosFail;