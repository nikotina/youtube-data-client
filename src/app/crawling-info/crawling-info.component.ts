import { Component, OnInit } from '@angular/core';
import { CrawlingInfo } from '../model/CrawlingInfo';
import { YoutubeDataService } from '../service/youtube-data-service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-crawling-info',
  templateUrl: './crawling-info.component.html',
  styleUrls: ['./crawling-info.component.css']
})
export class CrawlingInfoComponent implements OnInit {
  public crawlingInfos: CrawlingInfo[] = [];
  displayedColumns = [
    'suche',
    'erstellt',
    'count',
    'star'
  ];
  dataSource = this.crawlingInfos;
  
  constructor(private videoInfoService: YoutubeDataService) { }

  ngOnInit(): void {
    
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
  public onDeleteCrawlingInfo(cI: CrawlingInfo): void {
    this.videoInfoService.deleteCrawlingInfo(cI);
  }
}
