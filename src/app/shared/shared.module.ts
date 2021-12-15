import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicToolbarComponent} from './components/basic-toolbar/basic-toolbar.component';
import {ThemeToggleComponent} from './components/theme-toggle/theme-toggle.component';
import {LoseFocusAfterClickDirective} from './directives/lose-focus-after-click-directive/lose-focus-after-click.directive';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {SwiperModule} from 'swiper/angular';


@NgModule({
  declarations: [
    BasicToolbarComponent,
    ThemeToggleComponent,
    LoseFocusAfterClickDirective,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    SwiperModule
  ],
  exports: [
    BasicToolbarComponent,
    ThemeToggleComponent,
    LoseFocusAfterClickDirective,
    SwiperModule
  ]
})
export class SharedModule {
}
