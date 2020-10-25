import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './home-routing.module';
import { NavBarMenuComponent } from './nav-bar-menu/nav-bar-menu.component';
import { OverviewComponent } from './overview/overview.component';
import { OverviewCompactViewComponent } from './overview-compact-view/overview-compact-view.component';
import { ConnectComponent } from './connect/connect.component';
import { WorkModule } from './work/work.module';
import { SkillsModule } from './skills/skills.module';

@NgModule({
  declarations: [
    HomeComponent,
    NavBarMenuComponent,
    OverviewComponent,
    OverviewCompactViewComponent,
    ConnectComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    WorkModule,
    SkillsModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class HomeModule { }
