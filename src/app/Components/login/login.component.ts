import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm:FormGroup;
  constructor(
    private _formBuilder :FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForms();
  }
  createForms(){
  this.loginForm=this._formBuilder.group({
    email:['',],
    password:['']
  })
  }
}
