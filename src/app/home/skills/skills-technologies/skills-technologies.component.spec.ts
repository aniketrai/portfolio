import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsTechnologiesComponent } from './skills-technologies.component';

describe('SkillsTechnologiesComponent', () => {
  let component: SkillsTechnologiesComponent;
  let fixture: ComponentFixture<SkillsTechnologiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsTechnologiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
