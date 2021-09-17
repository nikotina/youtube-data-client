import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { YoutubeDataServiceService } from './youtube-data-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { VideoInfoComponent } from './video-info/video-info.component';
import { VideoStatComponent } from './video-stat/video-stat.component';
import { VideoChannelComponent } from './video-channel/video-channel.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoInfoComponent,
    VideoStatComponent,
    VideoChannelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [YoutubeDataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
