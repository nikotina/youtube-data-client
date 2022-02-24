import { ComponentFixture, TestBed } from '@angular/core/testing';

import { searchInfoComponent } from './search-info.component';

describe('searchInfoComponent', () => {
  let component: searchInfoComponent;
  let fixture: ComponentFixture<searchInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ searchInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(searchInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
