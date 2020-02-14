import { Component, EventEmitter, OnInit, Input, Output, HostListener } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  @Input() embedHTML = '';
  @Input() isOpen = false;
  @Output() handleClose = new EventEmitter();

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getEmbedHTML() {
     return this.embedHTML;
  }

  @HostListener('window:keyup.esc') onKeyUp() {
    this.handleClose.emit();
  }

  onCloseVideoPlayerClick = () => {
    this.handleClose.emit();
  }
}
