import {Component, Input} from '@angular/core';
import {ThemeModeService} from '../../services/theme-mode-service';

@Component({
    selector: 'app-basic-toolbar',
    templateUrl: './basic-toolbar.component.html',
    styleUrls: ['./basic-toolbar.component.scss'],
    standalone: false
})
export class BasicToolbarComponent {

  @Input() showThemeToggle = true;

  appTheme$ = this.themeService.themeMode$;

  constructor(private themeService: ThemeModeService) {
  }

}
