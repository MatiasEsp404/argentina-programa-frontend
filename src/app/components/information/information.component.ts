import { Component, OnInit } from '@angular/core';
import { Information } from '../../models/information/information';
import { InformationService } from '../../services/information/information.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  information: Information;

  constructor(private informationService: InformationService) { }

  ngOnInit(): void {
    this.getInformation();
  }

  private getInformation(){
    this.informationService.getInformation().subscribe(info => {
      this.information = info;
    })
  }

  changesReceived(){
    console.log("information recibio los cambios de validation");

  }

}
