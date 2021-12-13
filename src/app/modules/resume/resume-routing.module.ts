import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ResumePageComponent} from './pages/resume-page/resume-page.component';


const resumeRoutes: Routes = [
  {
    path: '',
    component: ResumePageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(resumeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ResumeRoutingModule {
}
