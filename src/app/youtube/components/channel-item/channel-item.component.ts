import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromYoutube from './../../reducers/index';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-channel-item',
  templateUrl: './channel-item.component.html',
  styleUrls: ['./channel-item.component.scss']
})
export class ChannelItemComponent implements OnInit {

  channel$: Observable<any>;

  constructor(private store: Store<fromYoutube.State>) {
    this.channel$ = this.store.select(fromYoutube.getSelectedChannel);
  }

  ngOnInit() {
    //const channelId = this.route.snapshot.paramMap.get('id');
  }

}
