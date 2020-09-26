import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
    exports: [
        MatCardModule,
        MatListModule,
        MatMenuModule,
        MatIconModule,
        MatToolbarModule,
        MatGridListModule
    ]
})
export class MaterialModule { }
