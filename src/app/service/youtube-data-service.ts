import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { VideoInfo } from '../model/VideoInfo';
import { VideoStats } from '../model/VideoStats';
import { ChannelInfo } from '../model/ChannelInfo';
import { environment } from 'src/environments/environment';
import { CrawlingInfo } from '../model/CrawlingInfo';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class YoutubeDataService {
  private apiServerUrl = environment.apiBaseUrl;
  private videoInfos: VideoInfo[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  public crawlYoutube(keyword: string): void {
    this.http.get<string>(`${this.apiServerUrl}/crawl/${keyword}/1`).subscribe(
      (res) => console.log('HTTP response', res),
      (err) => console.log('HTTP Error', err),
      () => {
        console.log('HTTP request completed.');
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['crawling-info']);
      }
    );
  }

  public getAllCrawlingInfos(): Observable<CrawlingInfo[]> {
    return this.http.get<CrawlingInfo[]>(`${this.apiServerUrl}/crawl`);
  }

  public getAllVideoInfos(): Observable<VideoInfo[]> {
    return this.http.get<VideoInfo[]>(`${this.apiServerUrl}/info`);
  }

  public getAllChannelInfos(): Observable<ChannelInfo[]> {
    return this.http.get<ChannelInfo[]>(`${this.apiServerUrl}/channel`);
  }

  public getAllVideoStats(): Observable<VideoStats[]> {
    return this.http.get<VideoStats[]>(`${this.apiServerUrl}/stat`);
  }

  public getVideoInfoById(videoInfoId: number): Observable<VideoInfo> {
    return this.http.get<VideoInfo>(`${this.apiServerUrl}/${videoInfoId}`);
  }

  public getVideoInfoBySearchKey(searchKey: string): Observable<VideoInfo[]> {
    return this.http.get<VideoInfo[]>(
      `${this.apiServerUrl}/info/searchkey/${searchKey}`
    );
  }

  public deleteCrawlingInfo(id: number): void {
    this.deleteCrawlingInfoById(id);
  }

  public deleteCrawlingInfoById(id: number): void {
    this.http.delete(`${this.apiServerUrl}/info/delete/${id}`).subscribe(
      (res) => console.log('HTTP response', res),
      (err) => console.log('HTTP Error', err),
      () => {
        console.log('HTTP request completed.');
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['crawling-info']);
      }
    );
  }

  public downloadURL(videoId: string): void {
    console.log('download start');
    this.http
      .get(`${this.apiServerUrl}/youtubedownload/${videoId}`, {
        reportProgress: true,
      })
      .subscribe(
        (res) => console.log('HTTP response', res),
        (err) => console.log('HTTP Error', err),
        () => {
          console.log('HTTP request completed.');
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate(['crawling-info']);
        }
      );
  }

  public getVideoStatsById(videoStatsId: number): Observable<VideoStats> {
    return this.http.get<VideoStats>(
      `${this.apiServerUrl}/stat/${videoStatsId}`
    );
  }

  public getChannelById(channelId: number): Observable<ChannelInfo> {
    return this.http.get<ChannelInfo>(`${this.apiServerUrl}/stat/${channelId}`);
  }

}
