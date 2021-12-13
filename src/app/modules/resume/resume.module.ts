import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ResumePageComponent} from './pages/resume-page/resume-page.component';
import {MatIconModule} from '@angular/material/icon';
import {ResumeRoutingModule} from './resume-routing.module';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    ResumePageComponent
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    SharedModule,
    MatIconModule
  ]
})
export class ResumeModule {
}
