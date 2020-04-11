import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './home-routing.module';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { NavBarMenuComponent } from './nav-bar-menu/nav-bar-menu.component';
import { SkillsComponent } from './skills/skills.component';
import { OverviewComponent } from './overview/overview.component';
import { OverviewCompactViewComponent } from './overview-compact-view/overview-compact-view.component';
import { ConnectComponent } from './connect/connect.component';

@NgModule({
  declarations: [
    HomeComponent,
    WorkExperienceComponent,
    NavBarMenuComponent,
    SkillsComponent,
    OverviewComponent,
    OverviewCompactViewComponent,
    ConnectComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class HomeModule { }
