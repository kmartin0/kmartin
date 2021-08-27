import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BasicToolbarComponent } from '../components/basic-toolbar/basic-toolbar.component';
import { ThemeToggleComponent } from '../components/theme-toggle/theme-toggle.component';
import {LoseFocusAfterClickDirective} from '../directives/lose-focus-after-click-directive/lose-focus-after-click.directive';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    BasicToolbarComponent,
    ThemeToggleComponent,
    LoseFocusAfterClickDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
