import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FareAttributeBottomSheetComponent } from './fare-attribute-bottom-sheet.component';

describe('FareAttributeBottomSheetComponent', () => {
  let component: FareAttributeBottomSheetComponent;
  let fixture: ComponentFixture<FareAttributeBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FareAttributeBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FareAttributeBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
