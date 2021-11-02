import { Component, OnInit } from '@angular/core';
import { CrawlingInfo } from '../CrawlingInfo';
import { YoutubeDataServiceService } from '../youtube-data-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-crawling-info',
  templateUrl: './crawling-info.component.html',
  styleUrls: ['./crawling-info.component.css']
})
export class CrawlingInfoComponent implements OnInit {
  public crawlingInfos: CrawlingInfo[] = [];
  constructor(private videoInfoService: YoutubeDataServiceService) { }

  ngOnInit(): void {
    setTimeout(() => {
    this.getCrawlingsInfos();
    });
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
  public onDeleteCrawlingInfo(cI: CrawlingInfo): void {
    this.videoInfoService.deleteCrawlingInfo(cI);
  }
}
