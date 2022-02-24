import { Component, OnInit } from '@angular/core';
import { SearchInfo } from '../model/SearchInfo';
import { YoutubeDataService } from '../service/youtube-data-service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-search-info',
  templateUrl: './search-info.component.html',
  styleUrls: ['./search-info.component.css']
})
export class searchInfoComponent implements OnInit {
  public searchInfos: SearchInfo[] = [];
  displayedColumns = [
    'search',
    'created',
    'count',
    'menu'
  ];
  
  
  constructor(private videoInfoService: YoutubeDataService) { }

  ngOnInit(): void {
    
    this.getsearchsInfos();
  
  }
  public getsearchsInfos(): void {
    this.videoInfoService.getAllSearchInfos().subscribe(
      (response: SearchInfo[]) => {
        this.searchInfos = response;
        console.log(this.searchInfos);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public deletesearchInfo(id: string): void {
    console.log("delete id:" + id);
    this.videoInfoService.deleteSearchInfo(parseInt(id));
  }
}
