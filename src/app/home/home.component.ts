import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  desktopWidth = 1024;
  screenHeight: string;
  isDesktop: boolean;
  resizeSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    this.resizeSubscription = fromEvent(window, 'resize')
      .pipe(
        debounceTime(200),
        map(() => window.innerWidth), //Don't use mapTo! 
        distinctUntilChanged(),
        startWith(window.innerWidth),
        tap(x => x > this.desktopWidth ? this.isDesktop = true : this.isDesktop = false),
        tap(() => {
          console.log(this.isDesktop);
          this.screenHeight = (window.innerHeight-55) + 'px';
        })
      ).subscribe();
  }

  ngOnDestroy() {
    this.resizeSubscription.unsubscribe();
  }
}
