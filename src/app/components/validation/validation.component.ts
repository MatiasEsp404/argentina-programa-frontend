import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Information } from "../../models/information/information";

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  public information: Information = {
    firstName: '',
    lastName: '',
    email: '',
    linkedin: '',
    gitHub: '',
    country: '',
    province: '',
    location: '',
    phoneNumber: '',
    seniority: '',
    profilePicture: '',
    coverImage: ''
  };

  public user = {
    email: '',
    password: ''
  }


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
    this.btnLoginDisabled = false;
    this.loginDisabled = !this.loginDisabled;
    this.logged = true;
    console.log("en la variable user: " + this.user.email);


  }

  editInfo(){
    this.btnEdit = !this.btnEdit;
  }

  onChanges(event: Event){
    const element = event.target as HTMLInputElement;

  }

  submit(){
    console.log(this.information)
  }

  changeError(){

  }


}
