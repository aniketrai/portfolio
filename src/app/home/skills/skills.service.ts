import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SkillDisplay } from './skills.classes';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private client: HttpClient) { }

  getSkills(): Observable<SkillDisplay[]> {
    return this.client.get<SkillDisplay[]>('assets/home/skills/skills-details.json');
  }

}
