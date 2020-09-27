import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './home-routing.module';
import { NavBarMenuComponent } from './nav-bar-menu/nav-bar-menu.component';
import { SkillsComponent } from './skills/skills.component';
import { OverviewComponent } from './overview/overview.component';
import { OverviewCompactViewComponent } from './overview-compact-view/overview-compact-view.component';
import { ConnectComponent } from './connect/connect.component';
import { WorkModule } from './work/work.module';

@NgModule({
  declarations: [
    HomeComponent,
    NavBarMenuComponent,
    SkillsComponent,
    OverviewComponent,
    OverviewCompactViewComponent,
    ConnectComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    WorkModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class HomeModule { }
