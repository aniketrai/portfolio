import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../../core/core.module';
import { SkillsComponent } from './skills.component';
import { StarRatingComponent } from './star-rating/star-rating.component';

const appRoutes: Routes = [
    {
        path: 'rating', component: SkillsComponent
    }
];


@NgModule({
    declarations: [
        SkillsComponent,
        StarRatingComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        RouterModule.forChild(appRoutes)
    ],
    exports: [SkillsComponent]
})
export class SkillsModule { }
