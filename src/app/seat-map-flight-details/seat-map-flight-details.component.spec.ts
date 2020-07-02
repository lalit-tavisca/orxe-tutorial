import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatMapFlightDetailsComponent } from './seat-map-flight-details.component';

describe('SeatMapFlightDetailsComponent', () => {
  let component: SeatMapFlightDetailsComponent;
  let fixture: ComponentFixture<SeatMapFlightDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatMapFlightDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatMapFlightDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
