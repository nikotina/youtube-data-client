import { TestBed } from '@angular/core/testing';

import { YoutubeDataServiceService } from './youtube-data-service.service';

describe('YoutubeDataServiceService', () => {
  let service: YoutubeDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YoutubeDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
