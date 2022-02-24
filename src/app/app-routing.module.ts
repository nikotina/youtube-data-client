import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoInfoComponent }from './video-info/video-info.component';
import { VideoChannelComponent } from './video-channel/video-channel.component';
import { VideoStatComponent } from './video-stat/video-stat.component';
import { searchInfoComponent } from './search-info/search-info.component';
const routes: Routes = [
  {path: 'search-info', component: searchInfoComponent},
  {path: 'video-info/:keyword', component: VideoInfoComponent},
  {path: 'video-channel', component: VideoChannelComponent},
  {path: 'video-stat', component: VideoStatComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
