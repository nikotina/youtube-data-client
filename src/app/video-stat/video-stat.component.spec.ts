import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoStatComponent } from './video-stat.component';

describe('VideoStatComponent', () => {
  let component: VideoStatComponent;
  let fixture: ComponentFixture<VideoStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
