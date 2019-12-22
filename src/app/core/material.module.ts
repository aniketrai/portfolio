import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    exports: [
        MatCardModule
    ]
})
export class MaterialModule { }
