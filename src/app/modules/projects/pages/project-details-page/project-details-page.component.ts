import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {myMainProjects} from '../../../../shared/data/projects';
import {Project} from '../../../../shared/models/project';
import {SwiperOptions, Swiper, Pagination, Navigation} from 'swiper';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-project-details-page',
  templateUrl: './project-details-page.component.html',
  styleUrls: ['./project-details-page.component.scss']
})
export class ProjectDetailsPageComponent implements OnInit {

  projects = myMainProjects;
  project!: Project;

  @ViewChild('test') testEl!: HTMLElement;

  swiperConfig: SwiperOptions = {
    pagination: {clickable: true},
    navigation: true,
  }

  ngOnInit() {
    Swiper.use([Pagination, Navigation]);
    this.initProject();
  }

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  private initProject() {

    this.route.params.subscribe(params => {
      const projectParam = params.project;

      const project: Project | undefined = myMainProjects
        .map(value => value.projects)
        .reduce((a, b) => a.concat(b), [])
        .find(proj => proj.routeParam === projectParam);

      project ? this.project = project : this.router.navigateByUrl('404');

    });
  }
}
