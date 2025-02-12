import {Routes} from '@angular/router';
import {ProjectsPageComponent} from './pages/projects-page/projects-page.component';
import {ProjectDetailsPageComponent} from './pages/project-details-page/project-details-page.component';

export const projectsRoutes: Routes = [
  {
    path: '',
    component: ProjectsPageComponent
  },
  {
    path: ':project',
    component: ProjectDetailsPageComponent
  }
];
