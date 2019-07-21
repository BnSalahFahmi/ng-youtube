export interface Channel {
    data: object,
    statistics?: object,
    videos?: any,
    playlists?: any
}

export function initChannel(): Channel {
    return {
        data: {},
        statistics: {},
        videos: [],
        playlists: []
    }
}