import { Action } from '@ngrx/store';

export const LOAD_CHANNELS = '[Youtube Channels] Load';
export const LOAD_CHANNELS_SUCCESS = '[Youtube Channels] Load Success';
export const LOAD_CHANNELS_FAIL = '[Youtube Channels] Load Fail';

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


// export a new type that represents the youtube actions 
export type ActionType = LoadChannels | LoadChannelsSuccess | LoadChannelsFail;