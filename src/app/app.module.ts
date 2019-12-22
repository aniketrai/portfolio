import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HomeModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
