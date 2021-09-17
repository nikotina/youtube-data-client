import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { VideoInfo } from '../VideoInfo';
import { YoutubeDataServiceService } from '../youtube-data-service.service';

@Component({
  selector: 'app-video-info',
  templateUrl: './video-info.component.html',
  styleUrls: ['./video-info.component.css']
})
export class VideoInfoComponent implements OnInit {
  public videoInfos: VideoInfo[] = [];

  constructor(
    private videoInfoService: YoutubeDataServiceService,
    private route: ActivatedRoute,
    private router: Router
    ){}

    ngOnInit() {
      const keyword = this.route.snapshot.paramMap.get('keyword')!;
      //this.videoInfos = this.videoInfoService.getVideoInfoBySearchKey(keyword).map((res:Response) => <VideoInfo[]>res.json());;
      //this.videoInfos = this.route.paramMap.pipe(
        //switchMap((params: ParamMap) =>
        //this.videoInfoService.getVideoInfoBySearchKey(params.get('id')!
        this.getVideoInfoBySearchkey(keyword);

    }

    public getVideoInfoBySearchkey(keyword : string): void {
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
