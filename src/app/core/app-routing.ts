import {Routes} from '@angular/router';
import {PageNotFoundComponent} from '../shared/components/page-not-found/page-not-found.component';
import {projectsRoutes} from '../modules/projects/projects-routing'
import {resumeRoutes} from '../modules/resume/resume-routing'
import {homeRoutes} from '../modules/home/home-routing'

export const appRoutes: Routes = [
  {
    path: '',
    children: homeRoutes,
    data: {title: 'Home'}
  },
  {
    path: 'projects',
    children: projectsRoutes,
    data: {title: 'Projects'}
  },
  {
    path: 'resume',
    children: resumeRoutes,
    data: {title: 'Resume'}
  },
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '404'}
];
