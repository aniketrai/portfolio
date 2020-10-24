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
        tap(x => console.log(this.isDesktop))
      ).subscribe();
  }

  ngOnDestroy() {
    this.resizeSubscription.unsubscribe();
  }
}
