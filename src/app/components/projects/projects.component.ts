import { Component, OnInit, Input } from '@angular/core';
import { Formation } from 'src/app/models/formation/formation';
import { Information } from 'src/app/models/information/information';
import { Project } from 'src/app/models/project/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  @Input() public information: Information = new Information();

  constructor() { }

  ngOnInit(): void {
  }

}
