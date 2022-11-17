import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public loginDisabled: Boolean = false;
  public btnLoginDisabled: Boolean = true;
  public logged: Boolean = false;
  public btnEdit: Boolean = false;

  

  disableLogin(){
    this.loginDisabled = !this.loginDisabled;
  }

  loggedIn(){
    this.btnLoginDisabled = false;
    this.loginDisabled = !this.loginDisabled;
    this.logged = true;
  }

  editInfo(){
    this.btnEdit = true;
  }

}
