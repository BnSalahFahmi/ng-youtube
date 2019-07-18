import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { YoutubeService } from './services/youtube.service';
import { SharedModule } from '../shared/shared.module';
import { ChannelListComponent } from './components/channel-list/channel-list.component';
import { reducers } from './reducers/index';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { YoutubeEffects } from './effects/youtube.effects';
import { ChannelItemComponent } from '@app/youtube/components/channel-item/channel-item.component';


@NgModule({
  declarations: [
    ChannelListComponent,
    ChannelItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    YoutubeRoutingModule,
    StoreModule.forFeature('youtube', reducers),
    EffectsModule.forFeature([YoutubeEffects])
  ],
  providers: [
    YoutubeService
  ]
})
export class YoutubeModule { }
