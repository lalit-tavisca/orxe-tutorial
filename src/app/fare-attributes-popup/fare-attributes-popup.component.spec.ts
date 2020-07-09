import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FareAttributesPopupComponent } from './fare-attributes-popup.component';

describe('FareAttributesPopupComponent', () => {
  let component: FareAttributesPopupComponent;
  let fixture: ComponentFixture<FareAttributesPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FareAttributesPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FareAttributesPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
