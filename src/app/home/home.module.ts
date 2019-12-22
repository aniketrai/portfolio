import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class HomeModule { }
