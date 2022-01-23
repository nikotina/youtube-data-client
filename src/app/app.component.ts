import { Component, OnInit } from '@angular/core';
import { CrawlingInfo } from './model/CrawlingInfo';
import { YoutubeDataService } from './youtube-data-service';
import { CrawlingInfoComponent } from './crawling-info/crawling-info.component';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SpinnerService } from './spinner-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public searchkey : string = "";

  constructor(
    private videoInfoService: YoutubeDataService,
    private router: Router,
    public spinnerService: SpinnerService) {}

  ngOnInit() {

  }

  public crawlYoutube(input : string): void {
    console.log("You entered: ", input);
    this.videoInfoService.crawlYoutube(input);
    this.searchkey = ""
  }


}
