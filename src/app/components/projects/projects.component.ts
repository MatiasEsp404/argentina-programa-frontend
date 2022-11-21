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

  public project: Project[] = [
    {
      name: "argentina-programa-frontend",
      description: "Entrega del proyecto integrador de Argentina Programa. Portfolio Web FrontEnd.",
      url: "https://github.com/MatiasEsp404/argentina-programa-frontend"
    },
    {
      name: "argentina-programa-backend",
      description: "Entrega del proyecto integrador de Argentina Programa. Portfolio Web BackEnd.",
      url: "https://github.com/MatiasEsp404/argentina-programa-backend"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
