import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable, Subscription, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { VideoInfo } from '../VideoInfo';
import { YoutubeDataServiceService } from '../youtube-data-service.service';
import { spawn } from 'child_process';

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
  public downloadYoutubeFile(url: string, fileName: string): void {
    const ls = spawn('youtube-dl', ['-o'+ this.filePath, url]);

    ls.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    ls.stderr.on('data', (data) => {
      console.log(`stderr: ${data}`);
    });

    ls.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
    });
  }
}
