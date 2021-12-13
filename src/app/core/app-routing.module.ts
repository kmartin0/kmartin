import {NgModule, ViewChild} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules, Router, Scroll, Event} from '@angular/router';
import {CommonModule, ViewportScroller} from '@angular/common';
import {PageNotFoundComponent} from '../shared/components/page-not-found/page-not-found.component';
import {filter} from 'rxjs/operators';
import {CdkScrollable} from '@angular/cdk/overlay';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('../modules/home/home.module').then(m => m.HomeModule),
    data: {title: 'Home'}
  },
  {
    path: 'projects',
    loadChildren: () => import('../modules/projects/projects.module').then(m => m.ProjectsModule),
    data: {title: 'Projects'}
  },
  {
    path: 'resume',
    loadChildren: () => import('../modules/resume/resume.module').then(m => m.ResumeModule),
    data: {title: 'Resume'}
  },
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes , {
    relativeLinkResolution: 'legacy',
    scrollPositionRestoration: 'enabled',
    // preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {

  // Workaround for scrollPositionRestoration (and viewportScroller) not restoring mat-drawer-content scroll position
  // on navigation change. Issue: https://github.com/angular/angular/issues/24547
  constructor(router: Router/*, viewportScroller: ViewportScroller*/) {
    router.events.pipe(
      filter((e: Event): e is Scroll => e instanceof Scroll)
    ).subscribe(e => {
      if (e.position) {
        // backward navigation
        // viewportScroller.scrollToPosition(e.position);
        document.getElementsByTagName('mat-drawer-content')[0].scrollTo(0, 0)
      } else if (e.anchor) {
        // anchor navigation
        // viewportScroller.scrollToAnchor(e.anchor);
        document.getElementsByTagName('mat-drawer-content')[0].scrollTo(0, 0)
      } else {
        // forward navigation
        // viewportScroller.scrollToPosition([0, 0]);
        document.getElementsByTagName('mat-drawer-content')[0].scrollTo(0, 0)
      }
    });
  }
}
