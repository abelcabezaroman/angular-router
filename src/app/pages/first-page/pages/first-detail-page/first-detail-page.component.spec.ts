import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDetailPageComponent } from './first-detail-page.component';

describe('FirstDetailPageComponent', () => {
  let component: FirstDetailPageComponent;
  let fixture: ComponentFixture<FirstDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
