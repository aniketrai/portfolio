import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarToolbarComponent } from './nav-bar-toolbar.component';

describe('NavBarToolbarComponent', () => {
  let component: NavBarToolbarComponent;
  let fixture: ComponentFixture<NavBarToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
