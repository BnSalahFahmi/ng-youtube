import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { refCount, publishLast, map, filter, catchError, mergeMap } from 'rxjs/operators';
import { environment as env } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  base_url = 'https://www.googleapis.com/youtube/v3/';
  max_results = 50;

  constructor(private http: HttpClient) {

  }

  fetchChannels(query?: string, pageToken?: string) {
    let url = `${this.base_url}search?&maxResults=${this.max_results}&type=channel&part=snippet`;
    if (query)
      url = url.concat(`&q=${query}`);
    if (pageToken)
      url = url.concat(`&pageToken=${pageToken}`);
    return this.http.get(url + `&key=${env.YOUTUBE_API_KEY}`);
  }

  getChannel(channelId) {
    return this.http.get(`${this.base_url}channels?part=snippet,statistics,brandingSettings&id=${channelId}&key=${env.YOUTUBE_API_KEY}`);
  }

  async fetchVideos(query?: string, pageToken?: string) {
    let url = `${this.base_url}search?&maxResults=${this.max_results}&part=snippet,id`;
    if (query)
      url = url.concat(`&q=${query}`);
    if (pageToken)
      url = url.concat(`&pageToken=${pageToken}`);
    const res = await this.http.get(url + `&key=${env.YOUTUBE_API_KEY}`).toPromise();
    let ids = [];
    res['items'].forEach((item) => {
        ids.push(item.id.videoId);
    });
    return await this.getVideos(ids).toPromise();
  }

  getVideos(ids) {
    debugger;
    return this.http.get(`${this.base_url}videos?id=${ids.join(',')}&maxResults=${this.max_results}&part=snippet,player,contentDetails,statistics&key=${env.YOUTUBE_API_KEY}`);
  }

  fetchChannelStatistics(channelId) {
    return this.http.get(`${this.base_url}channels?part=statistics&id=${channelId}&key=${env.YOUTUBE_API_KEY}`);
  }

  fetchChannelVideos(channelId) {
    return this.http.get(`${this.base_url}videos?part=snippet,player,statistics&chart=mostPopular&maxResults=${this.max_results}&channelId=${channelId}&key=${env.YOUTUBE_API_KEY}`);
  }

  fetchChannelPlaylists(channelId) {
    return this.http.get(`${this.base_url}playlists?part=player&chart=mostPopular&maxResults=${this.max_results}&channelId=${channelId}&key=${env.YOUTUBE_API_KEY}`);
  }

}
