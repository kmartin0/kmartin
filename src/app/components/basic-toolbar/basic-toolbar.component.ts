import {Component, Input, OnInit} from '@angular/core';
import {ThemeService} from '../../services/theme-service';

@Component({
  selector: 'app-basic-toolbar',
  templateUrl: './basic-toolbar.component.html',
  styleUrls: ['./basic-toolbar.component.scss']
})
export class BasicToolbarComponent {

  @Input() showThemeToggle = true;

  isDarkTheme$ = this.themeService.isDarkTheme;

  constructor(private themeService: ThemeService) {
  }

}
