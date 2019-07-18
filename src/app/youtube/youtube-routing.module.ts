import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChannelListComponent } from './components/channel-list/channel-list.component';

const routes: Routes = [
    { path:"channels", component: ChannelListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeRoutingModule { }
