import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable, Subscription, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { VideoInfo } from '../VideoInfo';
import { YoutubeDataService } from '../youtube-data-service';

declare let EventSource: any;

@Component({
  selector: 'app-video-info',
  templateUrl: './video-info.component.html',
  styleUrls: ['./video-info.component.css'],
})
export class VideoInfoComponent implements OnInit {
  public videoInfos: VideoInfo[] = [];
  outputPath: string = 'https://youtu.be/';
  filePath: string = '/films/'
  keyword: any;
  sub: Subscription = new Subscription();

  constructor(
    private videoInfoService: YoutubeDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe((params) => {
      this.keyword = params.get('keyword');
    });

    console.log('keyword is: ' + this.keyword);
    setTimeout(() => {
      this.getVideoInfoBySearchkey(this.keyword);
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onBack(): void {
    this.router.navigate(['crawling-info']);
  }

  connect(): void {
    let source = new EventSource('http://localhost:8080/progress');
    source.addEventListener('message', (message: { data: string; }) => {
      let n: string;
      n = JSON.parse(message.data);
      
    });
    source.onmessage = (message: { data: string; })=>{
      console.log(message.data);
   }
  }

  public getVideoInfoBySearchkey(keyword: string): void {
    this.videoInfoService.getVideoInfoBySearchKey(keyword).subscribe(
      (response: VideoInfo[]) => {
        this.videoInfos = response;
        console.log(this.videoInfos);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public downloadYoutubeFile(event: Event, videoInfo: VideoInfo): void {
    console.log(videoInfo.videoId);
    this.videoInfoService.downloadURL(videoInfo.videoId);
    setTimeout(() => {
      this.connect();
    });
  }
}
