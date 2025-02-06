import {Component, OnInit} from '@angular/core';
import {links} from '../../../../shared/data/links';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
    standalone: false
})
export class HomePageComponent implements OnInit {

  references = (({ github, linkedIn }) => ({ github, linkedIn }))(links);

  constructor() {

  }

  ngOnInit(): void {
  }

}
