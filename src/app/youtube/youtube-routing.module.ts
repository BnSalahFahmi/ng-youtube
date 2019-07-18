import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChannelListComponent } from './components/channel-list/channel-list.component';
import { ChannelItemComponent } from '@app/youtube/components/channel-item/channel-item.component';

const routes: Routes = [
    { path:"channels", component: ChannelListComponent },
    { path:"channels/:id", component: ChannelItemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeRoutingModule { }
