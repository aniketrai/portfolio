import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkExperienceService } from '../work-experience.service';
import { WorkDetail } from '../work.classes';
import { WorkModule } from '../work.module';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  workDetails$: Observable<WorkDetail[]>;

  constructor(private dataService: WorkExperienceService) {
    this.workDetails$ = this.dataService.getWorkDetails();
  }

  ngOnInit() {
  }

}
