import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SkillsComponent } from './skills/skills.component';
import { OverviewComponent } from './overview/overview.component';

export const appRoutes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {
        path: 'work-experience',
        component: WorkExperienceComponent
      },
      {
        path: 'skills',
        component: SkillsComponent
      },
      {
        path: '',
        component: OverviewComponent
      }
    ]
  }
];
