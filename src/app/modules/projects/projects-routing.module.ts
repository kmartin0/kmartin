import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProjectsPageComponent} from './pages/projects-page/projects-page.component';
import {ProjectDetailsPageComponent} from './pages/project-details-page/project-details-page.component';


const projectsRoutes: Routes = [
  {
    path: '',
    component: ProjectsPageComponent
  },
  {
    path: ':project',
    component: ProjectDetailsPageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(projectsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectsRoutingModule {
}
