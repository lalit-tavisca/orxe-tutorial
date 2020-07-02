import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatMapResultsPageComponent } from './seat-map-results-page.component';

describe('SeatMapResultsPageComponent', () => {
  let component: SeatMapResultsPageComponent;
  let fixture: ComponentFixture<SeatMapResultsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatMapResultsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatMapResultsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
