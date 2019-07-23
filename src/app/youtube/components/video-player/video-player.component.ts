import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  @Input("embedHTML") embedHTML : string;
  private video_player_maximized: boolean = true;
  private video_player_full_screen : boolean = false;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getIFrameSrc(embedHtml: string) {
    let url = embedHtml.split('"')[5];
    return "https:" + url;
  }

  onCloseVideoPlayerClick(){
    this.embedHTML = undefined;
  }

  onMinimizeVideoPlayerClick(){
    this.video_player_maximized = false;
    this.video_player_full_screen = false;
  }

  onMaximizeVideoPlayerClick(){
    this.video_player_maximized = true;
  }

  onFullScreenVideoPlayerClick(){
    this.video_player_full_screen = true;
  }

  onNormalScreenVideoPlayerClick(){
    this.video_player_full_screen = false;
  }
}
