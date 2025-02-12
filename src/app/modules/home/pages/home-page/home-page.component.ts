import {Component, OnInit} from '@angular/core';
import {links} from '../../../../shared/data/links';
import {MatIcon} from '@angular/material/icon';
import {NgFor, KeyValuePipe} from '@angular/common';
import {MatTooltip} from '@angular/material/tooltip';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true,
  imports: [MatIcon, NgFor, MatTooltip, KeyValuePipe]
})
export class HomePageComponent implements OnInit {

  references = (({github, linkedIn}) => ({github, linkedIn}))(links);

  constructor() {

  }

  ngOnInit(): void {
  }

}
