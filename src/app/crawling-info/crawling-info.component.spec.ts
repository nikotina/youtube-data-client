import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrawlingInfoComponent } from './crawling-info.component';

describe('CrawlingInfoComponent', () => {
  let component: CrawlingInfoComponent;
  let fixture: ComponentFixture<CrawlingInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrawlingInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawlingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
