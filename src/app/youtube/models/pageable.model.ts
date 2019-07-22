export interface Pageable<T> {
    items: object,
    resultsPerPage: number,
    totalResults: number,
    nextPageToken: string
}

export function initPageable() {
    return {
        items: [],
        resultsPerPage: 0,
        totalResults: 0,
        nextPageToken: ""
    }
}