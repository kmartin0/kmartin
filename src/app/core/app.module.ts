import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent], imports: [BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule], providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class AppModule {
}
