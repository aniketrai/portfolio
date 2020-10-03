import { Component, Input, OnInit } from '@angular/core';
import { WorkDetail } from '../work.classes';

@Component({
  selector: 'app-work-experience-details',
  templateUrl: './work-experience-details.component.html',
  styleUrls: ['./work-experience-details.component.scss']
})
export class WorkExperienceDetailsComponent implements OnInit {
  @Input() workDetails: WorkDetail[];
  constructor() {
  }

  ngOnInit() {
  }

}
