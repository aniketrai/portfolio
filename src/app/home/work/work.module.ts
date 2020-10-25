import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './work-routing.module';
import { CoreModule } from '../../core/core.module';
import { WorkExperienceDetailsComponent } from './work-experience-details/work-experience-details.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    WorkExperienceComponent,
    WorkExperienceDetailsComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    HttpClientModule,
    RouterModule.forChild(appRoutes)
  ],
  exports: [WorkExperienceComponent]
})
export class WorkModule { }
