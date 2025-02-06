import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {SharedModule} from '../../shared/shared.module';
import {HomeRoutingModule} from './home-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButton} from "@angular/material/button";

@NgModule({
  declarations: [
    HomePageComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        HomeRoutingModule,
        MatIconModule,
        MatTooltipModule,
        MatButton
    ]
})
export class HomeModule { }
