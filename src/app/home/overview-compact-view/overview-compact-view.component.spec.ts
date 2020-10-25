import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewCompactViewComponent } from './overview-compact-view.component';

describe('OverviewCompactViewComponent', () => {
  let component: OverviewCompactViewComponent;
  let fixture: ComponentFixture<OverviewCompactViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewCompactViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewCompactViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
