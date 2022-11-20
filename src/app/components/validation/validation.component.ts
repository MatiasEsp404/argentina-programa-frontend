import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Information } from "../../models/information/information";
import { User } from "../../models/validation/user";
import { ValidationService } from "../../services/validation/validation.service";
import { Token } from "../../models/validation/token";
import { Formation } from 'src/app/models/formation/formation';


@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  constructor(private validationService: ValidationService) { }

  ngOnInit(): void { }

  public information: Information = new Information();

  public user: User = {
    email: 'foo@outlook.com',
    password: 'ArgProg2022'
  }

  public token: Token;


  public userInvalid: Boolean = true;

  public loginDisabled: Boolean = false;
  public btnLoginDisabled: Boolean = true;
  public logged: Boolean = false;
  public btnEdit: Boolean = false;



  disableLogin(){
    this.loginDisabled = !this.loginDisabled;
  }

  editUser(event: Event){
    const element = event.target as HTMLInputElement;
    console.log(this.user);
  }

  loggedIn(event: Event){

    console.log("en la variable user: " + this.user.email + " " + this.user.password);
    this.authUser();
    console.log(this.userInvalid);


  }

  editInfo(){
    this.btnEdit = !this.btnEdit;
  }

  onChanges(event: Event){
    const element = event.target as HTMLInputElement;

  }

  submit(){
    console.log(this.information);
    this.patchInfo();
  }

  changeError(){

  }

  private authUser(){
    this.validationService.authUser(this.user).subscribe(info => {
      console.log('esta es la respuesta del endpoint' + info);
      console.log(info.toString());



      try {
        this.token = info;

      } catch (error) {
        console.log('No se guardo token en la variable');

      }
      console.log('este es el token: ' + this.token);
      this.btnLoginDisabled = false;
      this.loginDisabled = !this.loginDisabled;
      this.logged = true;
      this.userInvalid = false;
      console.log(this.userInvalid);
    })
  }

  private patchInfo(){
    this.validationService.patchInfo(this.information, this.token.token).subscribe(info => {
      this.information = info;
      console.log(this.information);


    })
  }

}
