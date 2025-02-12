import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../../../shared/models/project';
import {NgIf, NgFor} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MatCard} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {MatTooltip} from '@angular/material/tooltip';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  standalone: true,
  imports: [NgIf, RouterLink, MatCard, NgFor, MatIcon, MatTooltip, RouterLinkActive]
})
export class ProjectCardComponent implements OnInit {

  @Input() project?: Project;

  constructor() {
  }

  ngOnInit(): void {
  }

}
