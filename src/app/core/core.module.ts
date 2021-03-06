import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
        NavBarComponent
    ],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        NavBarComponent,
        MaterialModule,
        FlexLayoutModule
    ]
})
export class CoreModule { }
