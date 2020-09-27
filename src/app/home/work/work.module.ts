import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './work-routing.module';
import { CoreModule } from '../../core/core.module';


@NgModule({
  declarations: [WorkExperienceComponent],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(appRoutes)
  ],
  exports: [WorkExperienceComponent]
})
export class WorkModule { }
