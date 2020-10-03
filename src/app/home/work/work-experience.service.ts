import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkDetail } from './work.classes';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {

  constructor(private httpService: HttpClient) { }

  public getWorkDetails(): Observable<WorkDetail[]> {
    return this.httpService.get<WorkDetail[]>('../../../assets/home/work/work-details.json');
  }
}
