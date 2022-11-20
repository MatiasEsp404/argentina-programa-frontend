import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {


  public formation = [
    {
      name: "Argentina Programa",
      description: "HTML, CSS, JavaScript, TypeScript, Angular, MySQL, Java, SpringBoot, Heroku, FireBase",
      date: "16-03-2022"
    },
    {
      name: "Codo a Codo",
      description: "HTML, CSS, JavaScript, Vue, MySQL, Java, SpringBoot, Heroku, Netlify",
      date: "19-12-2021"
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
