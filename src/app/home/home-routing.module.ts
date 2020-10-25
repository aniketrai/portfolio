import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { OverviewComponent } from './overview/overview.component';

export const appRoutes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {
        path: 'skills',
        loadChildren: () => import('./skills/skills.module').then(mod => mod.SkillsModule),
      },
      {
        path: 'work',
        loadChildren: () => import('./work/work.module').then(mod => mod.WorkModule),
      },
      {
        path: '',
        component: OverviewComponent
      }
    ],
  }
];
