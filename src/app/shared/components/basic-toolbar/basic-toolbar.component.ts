import {Component, Input} from '@angular/core';
import {ThemeModeService} from '../../services/theme-mode-service';
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar';
import {NgIf} from '@angular/common';
import {ThemeToggleComponent} from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-basic-toolbar',
  templateUrl: './basic-toolbar.component.html',
  styleUrls: ['./basic-toolbar.component.scss'],
  standalone: true,
  imports: [MatToolbar, MatToolbarRow, NgIf, ThemeToggleComponent]
})
export class BasicToolbarComponent {

  @Input() showThemeToggle = true;

  constructor(private themeService: ThemeModeService) {
  }

}
