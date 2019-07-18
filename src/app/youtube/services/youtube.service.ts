import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {refCount, publishLast, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private _youtube_api_key = 'YOUR_API_KEY';

  list$: Observable<any>;

  constructor(private http: HttpClient) {
    // keep in cache the last result  
    this.list$ = this.http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=channel&key=" + this._youtube_api_key).pipe(map(response => response),publishLast(),refCount());
  }

  fetchChannels() {
    return this.http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&type=channel&key=" + this._youtube_api_key);
  }

  getChannel(channelId) {
    return this.http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&channelId=" + channelId + "&key=" + this._youtube_api_key);
  }

}
