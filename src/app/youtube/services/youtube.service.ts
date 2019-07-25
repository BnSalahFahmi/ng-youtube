import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { refCount, publishLast, map, filter, catchError, mergeMap } from 'rxjs/operators';
import { environment as env } from '@env/environment';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  base_url = 'https://www.googleapis.com/youtube/v3/';
  max_results = 50;

  channels_page_infos = {
    prevPageToken : undefined,
    nextPageToken : undefined
  }
  videos_page_infos = {
    prevPageToken : undefined,
    nextPageToken : undefined
  }

  constructor(private http: HttpClient) {

  }

  async fetchChannels(query?: string, pageToken?: string) {
    let url = `${this.base_url}search?&maxResults=${this.max_results}&type=channel&part=snippet`;
    if (query)
      url = url.concat(`&q=${query}`);
    if (pageToken)
      url = url.concat(`&pageToken=${pageToken}`);
    else if (this.channels_page_infos.nextPageToken && this.channels_page_infos.prevPageToken != this.channels_page_infos.nextPageToken) {
      this.channels_page_infos.prevPageToken = this.channels_page_infos.nextPageToken;
      url = url.concat(`&pageToken=${this.channels_page_infos.nextPageToken}`);
    }
    const res = await this.http.get(url + `&key=${env.YOUTUBE_API_KEY}`).toPromise();
    this.channels_page_infos.nextPageToken = res['nextPageToken'];
    let ids = [];
    res['items'].forEach((item) => {
      ids.push(item.id.channelId);
    });
    return await this.getChannels(ids).toPromise();
  }

  getChannel(channelId) {
    return this.http.get(`${this.base_url}channels?part=snippet,statistics,brandingSettings&id=${channelId}&key=${env.YOUTUBE_API_KEY}`);
  }

  getChannels(ids) {
    return this.http.get(`${this.base_url}channels?id=${ids.join(',')}&maxResults=${this.max_results}&part=snippet,contentDetails,statistics&key=${env.YOUTUBE_API_KEY}`);
  }

  async fetchVideos(query?: string, pageToken?: string) {
    let url = `${this.base_url}search?&maxResults=${this.max_results}&part=snippet,id`;
    if (query)
      url = url.concat(`&q=${query}`);
    if (pageToken)
      url = url.concat(`&pageToken=${pageToken}`);
    else if (this.videos_page_infos.nextPageToken && this.videos_page_infos.prevPageToken != this.videos_page_infos.nextPageToken) {
      this.videos_page_infos.prevPageToken = this.videos_page_infos.nextPageToken;
      url = url.concat(`&pageToken=${this.videos_page_infos.nextPageToken}`);
    }
    const res = await this.http.get(url + `&key=${env.YOUTUBE_API_KEY}`).toPromise();
    this.videos_page_infos.nextPageToken = res['nextPageToken'];
    let ids = [];
    res['items'].forEach((item) => {
      ids.push(item.id.videoId);
    });
    return await this.getVideos(ids).toPromise();
  }

  getVideos(ids) {
    console.log(`${this.base_url}videos?id=${ids.join(',')}&maxResults=${this.max_results}&part=snippet,player,contentDetails,statistics&key=${env.YOUTUBE_API_KEY}`);
    return this.http.get(`${this.base_url}videos?id=${ids.join(',')}&maxResults=${this.max_results}&part=snippet,player,contentDetails,statistics&key=${env.YOUTUBE_API_KEY}`);
  }

  fetchChannelStatistics(channelId) {
    return this.http.get(`${this.base_url}channels?part=statistics&id=${channelId}&key=${env.YOUTUBE_API_KEY}`);
  }

  fetchChannelVideos(channelId) {
    return this.http.get(`${this.base_url}videos?part=snippet,contentDetails,player,statistics&chart=mostPopular&maxResults=${this.max_results}&channelId=${channelId}&key=${env.YOUTUBE_API_KEY}`);
  }

  fetchChannelPlaylists(channelId) {
    return this.http.get(`${this.base_url}playlists?part=player&chart=mostPopular&maxResults=${this.max_results}&channelId=${channelId}&key=${env.YOUTUBE_API_KEY}`);
  }

}
