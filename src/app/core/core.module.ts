import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavBarToolbarComponent } from './nav-bar-toolbar/nav-bar-toolbar.component';

@NgModule({
    declarations: [
        NavBarComponent,
        NavBarToolbarComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        NavBarComponent,
        NavBarToolbarComponent,
        MaterialModule,
        FlexLayoutModule
    ]
})
export class CoreModule { }
