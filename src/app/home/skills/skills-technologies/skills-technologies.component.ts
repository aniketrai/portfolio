import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SkillDisplay } from '../skills.classes';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-skills-technologies',
  templateUrl: './skills-technologies.component.html',
  styleUrls: ['./skills-technologies.component.scss']
})
export class SkillsTechnologiesComponent implements OnInit {

  skills$: Observable<SkillDisplay[]>;

  constructor(private skillService : SkillsService) { }

  ngOnInit() {
    this.skills$ = this.skillService.getSkills();
  }

}
