import {Component, OnInit} from '@angular/core';
import {myMainProjects} from '../../../../shared/data/projects';
import {MainProject} from '../../../../shared/models/main-project';
import {NgFor} from '@angular/common';
import {ProjectCardComponent} from '../../components/project-card/project-card.component';
import {MatDivider} from '@angular/material/divider';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
  standalone: true,
  imports: [NgFor, ProjectCardComponent, MatDivider]
})
export class ProjectsPageComponent implements OnInit {

  mainProjects: MainProject[] = myMainProjects;

  constructor() {
  }

  ngOnInit(): void {
  }

}
