import {Component} from '@angular/core';
import {ThemeService} from '../../services/theme-service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss']
})
export class ThemeToggleComponent {

  isDarkTheme$ = this.themeService.isDarkTheme;

  constructor(private themeService: ThemeService) {
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

}
