import { CommonModule } from '@angular/common';

/* Angular material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './custom-material/angular-material.module';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { YoutubeDataService } from './service/youtube-data-service';
import { FormsModule } from '@angular/forms';
import { VideoInfoComponent } from './video-info/video-info.component';
import { VideoStatComponent } from './video-stat/video-stat.component';
import { VideoChannelComponent } from './video-channel/video-channel.component';
import { CrawlingInfoComponent } from './crawling-info/crawling-info.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomHttpInterceptor } from './util/http-interceptor';
import { MomentModule } from 'ngx-moment';

@NgModule({
  declarations: [
    AppComponent,
    VideoInfoComponent,
    VideoStatComponent,
    VideoChannelComponent,
    CrawlingInfoComponent,
  ],
  imports: [
    CustomMaterialModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MomentModule,
    CommonModule
  ],
  providers: [
    YoutubeDataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
