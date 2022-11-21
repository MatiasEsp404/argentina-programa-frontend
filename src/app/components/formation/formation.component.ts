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
    },
    {
      name: "Curso de introduccion a Java SE",
      description: "Variables, tipos de datos, operadores, condiciones, bucles, arrays.",
      date: "06-07-2022"
    },
    {
      name: "Curso de Java SE Orientado a Objetos",
      description: "Clases, objetos, encapsulamiento, sobrecarga, polimorfismo, interfaces, clases abstractas, herencia.",
      date: "25-09-2022"
    },
    {
      name: "Curso de programación funcional con Java SE",
      description: "Funciones Lamda, Function, Predicate, Consumer, Supplier, Operator, BuFunction, SAM, FunctionalInterface.",
      date: "05-11-2022"
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
