import {Component} from '@angular/core';
import {APP_THEME_MODE, ThemeModeService} from '../../services/theme-mode-service';
import {APP_THEME_COLOR, ThemeColorService} from "../../services/theme-color-service";
import {MatRadioChange} from "@angular/material/radio";

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
  standalone: false
})
export class ThemeToggleComponent {

  appThemeMode$ = this.themeModeService.themeMode$;
  appThemeColor$ = this.themeColorService.themeColor$;

  constructor(private themeModeService: ThemeModeService, private themeColorService: ThemeColorService) {
  }

  toggleThemeMode() {
    this.themeModeService.toggleThemeMode();
  }

  getIconForThemeMode(theme: APP_THEME_MODE | null): string {
    switch (theme) {
      case APP_THEME_MODE.LIGHT:
        return 'dark_mode'
      case APP_THEME_MODE.DARK:
        return 'light_mode'
      default:
        return '';
    }
  }

  onThemeSelected(change: MatRadioChange) {
    const selectedTheme = change.value as APP_THEME_COLOR;

    this.themeColorService.setThemeColor(selectedTheme);
  }

  protected readonly APP_THEME_COLOR = APP_THEME_COLOR;
}
