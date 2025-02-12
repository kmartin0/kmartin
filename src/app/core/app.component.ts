import {Component, ViewChild} from '@angular/core';
import {ThemeModeService} from '../shared/services/theme-mode-service';
import {ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {filter, map, mergeMap} from 'rxjs/operators';
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from '@angular/material/sidenav';
import {MatIcon, MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {registeredIcons} from '../shared/data/registeredIcons';
import {BasicToolbarComponent} from "../shared/components/basic-toolbar/basic-toolbar.component";
import {NgIf} from "@angular/common";
import {MatIconButton} from "@angular/material/button";
import {
  LoseFocusAfterClickDirective
} from "../shared/directives/lose-focus-after-click-directive/lose-focus-after-click.directive";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    BasicToolbarComponent,
    MatIcon,
    MatDrawerContainer,
    MatDrawerContent,
    RouterOutlet,
    NgIf,
    RouterLinkActive,
    RouterLink,
    MatDrawer,
    MatIconButton,
    LoseFocusAfterClickDirective
  ]
})
export class AppComponent {
  appTheme$ = this.themeService.themeMode$;

  @ViewChild('drawer') matDrawer?: MatDrawer;

  title = '';

  navRoutes = {
    home: '',
    projects: '/projects',
    resume: '/resume'
  }

  constructor(private themeService: ThemeModeService, private router: Router, private activatedRoute: ActivatedRoute,
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
    Object.keys(registeredIcons).forEach(iconKey => {
      this.matIconRegistry.addSvgIcon(iconKey, this.sanitizer.bypassSecurityTrustResourceUrl(registeredIcons[iconKey].url));
    });
  }
}
