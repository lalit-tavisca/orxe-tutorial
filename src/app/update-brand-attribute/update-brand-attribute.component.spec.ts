import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBrandAttributeComponent } from './update-brand-attribute.component';

describe('UpdateBrandAttributeComponent', () => {
  let component: UpdateBrandAttributeComponent;
  let fixture: ComponentFixture<UpdateBrandAttributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBrandAttributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBrandAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
