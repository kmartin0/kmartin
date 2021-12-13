import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectCardComponent} from './components/project-card/project-card.component';
import {ProjectDetailsPageComponent} from './pages/project-details-page/project-details-page.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {ProjectsPageComponent} from './pages/projects-page/projects-page.component';
import {ProjectsRoutingModule} from './projects-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {SharedModule} from '../../shared/shared.module';
import {SwiperModule} from 'swiper/angular';


@NgModule({
  declarations: [
    ProjectCardComponent,
    ProjectDetailsPageComponent,
    ProjectsPageComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule,
    MatDividerModule,
    MatCardModule,
    MatTooltipModule,
    MatIconModule,
  ]
})
export class ProjectsModule {
}
