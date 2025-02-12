import {Component, OnInit} from '@angular/core';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.scss'],
  standalone: true,
  imports: [MatIcon]
})
export class ResumePageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
