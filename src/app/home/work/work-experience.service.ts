import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WorkDetail } from './work.classes';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {

  constructor(private httpService: HttpClient) { }

  public getWorkDetails(): Observable<WorkDetail[]> {
    return this.httpService.get<WorkDetail[]>('assets/home/work/work-details.json').pipe(
      map(x => x.sort((a, b) => this.compareFn(a, b)))
    );
  }

  private compareFn(a: WorkDetail, b: WorkDetail) {
    if (a.id < b.id) return 1;
    else {
      if (a.id == b.id) return 0;
      else return -1;
    }
  }
}
