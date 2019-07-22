import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { refCount, publishLast, map } from 'rxjs/operators';
import { environment as env } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  base_url = 'https://www.googleapis.com/youtube/v3/';
  max_results = 50;

  list$: Observable<any>;

  constructor(private http: HttpClient) {
    
  }

  fetchChannels(pageToken : string) {
    if(pageToken)
      return this.http.get(`${this.base_url}search?pageToken=${pageToken}&maxResults=${this.max_results}&type=channel&part=snippet&key=${env.YOUTUBE_API_KEY}`);
    else
      return this.http.get(`${this.base_url}search?&maxResults=${this.max_results}&type=channel&part=snippet&key=${env.YOUTUBE_API_KEY}`);
  }

  getChannel(channelId) {
    return this.http.get(`${this.base_url}search?&type=channel&part=snippet&key=${env.YOUTUBE_API_KEY}`);
  }

  fetchVideos(pageToken : string) {
    if(pageToken)
    return this.http.get(`${this.base_url}videos?pageToken=${pageToken}&maxResults=${this.max_results}&chart=mostPopular&part=snippet,player,statistics&key=${env.YOUTUBE_API_KEY}`);
    else
      return this.http.get(`${this.base_url}videos?&maxResults=${this.max_results}&chart=mostPopular&part=snippet,player,statistics&key=${env.YOUTUBE_API_KEY}`);
  }

  fetchChannelStatistics(channelId) {
    return this.http.get(`${this.base_url}channels?part=statistics&id=${channelId}&key=${env.YOUTUBE_API_KEY}`);
  }

  fetchChannelVideos(channelId) {
    return this.http.get(`${this.base_url}videos?part=player&chart=mostPopular&maxResults=${this.max_results}&channelId=${channelId}&key=${env.YOUTUBE_API_KEY}`);
  }

  fetchChannelPlaylists(channelId) {
    return this.http.get(`${this.base_url}playlists?part=player&chart=mostPopular&maxResults=${this.max_results}&channelId=${channelId}&key=${env.YOUTUBE_API_KEY}`);
  }

}
