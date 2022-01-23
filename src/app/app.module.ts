
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { YoutubeDataService } from './youtube-data-service';
import { FormsModule } from '@angular/forms';
import { VideoInfoComponent } from './video-info/video-info.component';
import { VideoStatComponent } from './video-stat/video-stat.component';
import { VideoChannelComponent } from './video-channel/video-channel.component';
import { CrawlingInfoComponent } from './crawling-info/crawling-info.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomHttpInterceptor } from './http-interceptor';
import { MomentModule } from 'ngx-moment';

const materialModules = [
  MatButtonModule,
  MatIconModule
];
@NgModule({
  declarations: [
    AppComponent,
    VideoInfoComponent,
    VideoStatComponent,
    VideoChannelComponent,
    CrawlingInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    MomentModule,
    CommonModule,
    materialModules
  ],
  exports: [
    materialModules
  ],
  providers: [
    YoutubeDataService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: CustomHttpInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
