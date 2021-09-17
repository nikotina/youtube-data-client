import { Component, OnInit } from '@angular/core';
import { CrawlingInfo } from './CrawlingInfo';
import { YoutubeDataServiceService } from './youtube-data-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public crawlingInfos : CrawlingInfo[];
  //public crawlingInfo : CrawlingInfo;
  //public videoInfos: VideoInfo[];
  //public videoInfo: VideoInfo;

  constructor(private videoInfoService: YoutubeDataServiceService){}

  ngOnInit() {
    this.getCrawlingsInfos();
  }

  public getCrawlingsInfos(): void {
    this.videoInfoService.getAllCrawlingInfos().subscribe(
      (response: CrawlingInfo[]) => {
        this.crawlingInfos = response;
        console.log(this.crawlingInfos);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
