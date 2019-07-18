import { Action } from '@ngrx/store';

export const LOAD_CHANNELS = '[Youtube Channels] load';
export const LOAD_CHANNELS_SUCCESS = '[Youtube Channels] load Success';
export const LOAD_CHANNELS_FAIL = '[Youtube Channels] load Fail';

export const VIEW_CHANNEL = '[Youtube Channel] view';
export const VIEW_CHANNEL_SUCCESS = '[Youtube Channel] view success';
export const VIEW_CHANNEL_FAIL = '[Youtube Channel] view fail';

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



// export a new type that represents the youtube actions 
export type ActionType = LoadChannels | LoadChannelsSuccess | LoadChannelsFail |
ViewChannel | ViewChannelSuccess | ViewChannelFail;