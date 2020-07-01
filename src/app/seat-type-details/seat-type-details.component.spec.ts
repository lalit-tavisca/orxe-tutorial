import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatTypeDetailsComponent } from './seat-type-details.component';

describe('SeatTypeDetailsComponent', () => {
  let component: SeatTypeDetailsComponent;
  let fixture: ComponentFixture<SeatTypeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatTypeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatTypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
