import {Component, OnInit} from '@angular/core';
import {myMainProjects} from '../../../../shared/data/projects';
import {MainProject} from '../../../../shared/models/main-project';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

  mainProjects: MainProject[] = myMainProjects;

  constructor() {
  }

  ngOnInit(): void {
  }

}
