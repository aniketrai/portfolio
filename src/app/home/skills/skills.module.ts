import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../../core/core.module';
import { SkillsComponent } from './skills.component';

const appRoutes: Routes = [
    {
        path: 'rating', component: SkillsComponent
    }
];


@NgModule({
    declarations: [
        SkillsComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        RouterModule.forChild(appRoutes)
    ],
    exports: [SkillsComponent]
})
export class SkillsModule { }
