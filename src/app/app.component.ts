import { Component, OnInit } from '@angular/core';
import { YoutubeDataService } from './service/youtube-data-service';
import { Router } from '@angular/router';
import { SpinnerService } from './service/spinner-service.service';
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
    this.router.navigate(['search-info']);
  }

  public crawlYoutube(input : string): void {
    console.log("You entered: ", input);
    this.videoInfoService.searchYoutube(input);
    this.searchkey = ""
  }


}
