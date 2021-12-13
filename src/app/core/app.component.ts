import {Component, ViewChild} from '@angular/core';
import {ThemeService} from '../shared/services/theme-service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, map, mergeMap} from 'rxjs/operators';
import {MatDrawer} from '@angular/material/sidenav';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {icons} from '../shared/data/icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDarkTheme$ = this.themeService.isDarkTheme;

  @ViewChild('drawer') matDrawer?: MatDrawer;

  title = '';

  navRoutes = {
    home: '',
    projects: '/projects',
    resume: '/resume'
  }

  constructor(private themeService: ThemeService, private router: Router, private activatedRoute: ActivatedRoute,
              private matIconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.initTitle();
    this.initMatIcons();
  }

  private initTitle() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data)
      )
      .subscribe((event) => {
        this.title = event?.title;
        this.matDrawer?.close();
      });
  }

  private initMatIcons() {
    Object.keys(icons).forEach(iconKey => {
      this.matIconRegistry.addSvgIcon(iconKey, this.sanitizer.bypassSecurityTrustResourceUrl(icons[iconKey].url));
    });
  }
}
