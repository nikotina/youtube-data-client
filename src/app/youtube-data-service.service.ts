import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VideoInfo } from './VideoInfo';
import { VideoStats } from './VideoStats';
import { ChannelInfo } from './ChannelInfo';
import { environment } from 'src/environments/environment';
import { CrawlingInfo } from './CrawlingInfo';

@Injectable({
  providedIn: 'root'
})
export class YoutubeDataServiceService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

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
    return this.http.get<VideoInfo[]>(`${this.apiServerUrl}/info/searchkey/${searchKey}`);
  }  

  public getVideoStatsById(videoStatsId: number): Observable<VideoStats> {
    return this.http.get<VideoStats>(`${this.apiServerUrl}/stat/${videoStatsId}`);
  }

  public getChannelById(channelId: number): Observable<ChannelInfo> {
    return this.http.get<ChannelInfo>(`${this.apiServerUrl}/stat/${channelId}`);
  }

}
