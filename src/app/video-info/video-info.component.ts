import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable, Subscription, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { VideoInfo } from '../VideoInfo';
import { YoutubeDataServiceService } from '../youtube-data-service.service';

@Component({
  selector: 'app-video-info',
  templateUrl: './video-info.component.html',
  styleUrls: ['./video-info.component.css'],
})
export class VideoInfoComponent implements OnInit {
  public videoInfos: VideoInfo[] = [];
  outputPath: string = 'https://youtu.be/';
  keyword: any;
  sub: Subscription = new Subscription();

  constructor(
    private videoInfoService: YoutubeDataServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

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
}
